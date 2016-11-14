import _  from 'lodash';

import ec       from '../eventConstants';
import wordUtil from '../utils/wordUtil.js';

const initialWord = wordUtil.getRandomWord();

const initialState = {
    initialWord,
    words:       wordUtil.getAllWords(initialWord),
    userInput:   ''
};

/*eslint-disable */
export default function word( state = initialState, action ) {
    switch (action.type) {
        case ec.WORD_INPUT_VALUE: return inputValue(state, action.data);

        default: return state;
    }
}
/*eslint-enable */

function inputValue(state, data) {
    const updatedState = _.cloneDeep(state);

    updatedState.userInput += data;

    return updatedState;
}
