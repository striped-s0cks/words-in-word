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
