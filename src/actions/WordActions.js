import ec from '../eventConstants';

export default {
    inputValue(value) {
        return {
            type: ec.WORD_INPUT_VALUE,
            data: value
        };
    }
};
