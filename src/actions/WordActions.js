import ec from '../eventConstants';

export default {
    inputValue(value) {
        return {
            type: ec.WORD_INPUT_VALUE,
            data: value
        };
    },

    clearInput() {
        return {
            type: ec.WORD_CLEAR_INPUT
        };
    },

    help() {
        return {
            type: ec.WORD_HELP
        };
    },

    generate() {
        return {
            type: ec.WORD_GENERATE
        };
    }
};
