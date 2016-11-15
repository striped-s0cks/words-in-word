import _ from 'lodash';

import ec       from '../eventConstants';
import wordUtil from '../utils/wordUtil.js';

const initialWord = wordUtil.getRandomWord();

const initialState = {
    initialWord,
    words:       wordUtil.getAllWords(initialWord),
    userInput:   '',

    status: {
        isEdited: false
    }
};

/*eslint-disable */
export default function word( state = initialState, action ) {
    switch (action.type) {
        case ec.WORD_INPUT_VALUE: return inputValue(state, action.data);
        case ec.WORD_CLEAR_INPUT: return clearInput(state);
        case ec.WORD_HELP:        return help(state);
        case ec.WORD_GENERATE:    return generate(state);

        default: return state;
    }
}
/*eslint-enable */

function inputValue(state, data) {
    const updatedState = _.cloneDeep(state);

    updatedState.userInput += data;
    updatedState.status.isEdited = true;

    const acceptableWord = _.find( updatedState.words, { value: updatedState.userInput } );

    if ( acceptableWord && !acceptableWord.isShown ) {
        updatedState.userInput = '';
        acceptableWord.isShown = true;

        acceptableWord.chars.forEach( item => {
            item.isShown = true;
        });

        updatedState.status.isEdited = false;
    }

    return updatedState;
}

function clearInput(state) {
    const updatedState = _.cloneDeep(state);

    updatedState.userInput = '';
    updatedState.status.isEdited = false;

    return updatedState;
}

function help(state) {
    const updatedState = _.cloneDeep(state);

    _showOneChar(updatedState);

    return updatedState;
}

function generate(state) {
    const updatedState = _.cloneDeep(state);

    const generatedWord = wordUtil.getRandomWord();

    updatedState.initialWord = generatedWord;
    updatedState.words = wordUtil.getAllWords(generatedWord)
    updatedState.userInput = '';
    updatedState.status.isEdited = false;

    return updatedState;
}

function _showOneChar(state) {
    const hiddenWord = _findHiddenWord(state);

    if ( hiddenWord ) {
        const hiddenChars = [];

        hiddenWord.chars.forEach( letter => {
            if ( !letter.isShown ) {
                hiddenChars.push(letter);
            }
        });

        if ( hiddenChars.length ) {
            const hiddenChar = hiddenChars[ Math.floor( Math.random() * hiddenChars.length ) ];

            hiddenChar.isShown = true;

            if ( hiddenChars.length === 1 ) {
                hiddenWord.isShown = true;
            }
        }
    }
}

function _findHiddenWord(state) {
    const hiddenWords = [];

    state.words.forEach( item => {
        if ( !item.isShown ) {
            hiddenWords.push(item);
        }
    });

    if ( hiddenWords.length ) {
        return hiddenWords[ Math.floor( Math.random() * hiddenWords.length ) ];
    }

    return;
}
