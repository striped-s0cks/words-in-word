import cmb from 'js-combinatorics';
import _   from 'lodash';

import words from './words';

const MIN_LENGTH = 7;

function getRandomWord() {
    let word;

    while ( !word ) {
        const generatedWord = words[ Math.floor( Math.random() * words.length ) ];

        if ( generatedWord.length >= MIN_LENGTH ) {
            word = generatedWord;
        }
    }

    return word;
}

function getAllWords(word) {
    const subsets = cmb.permutationCombination(word.split(''));
    const allWords = [];

    subsets.forEach( item => {
        const joined = item.join('');

        if ( ( words.indexOf(joined) > -1 ) && ( joined !== word ) ) {
            const chars = item.map( letter => {
                return {
                    value: letter,
                    isShown: false
                };
            });

            allWords.push({
                value: joined,
                isShown: false,
                chars
            });
        }
    });

    return _.uniqBy(allWords, 'value');
}

module.exports = {
    getRandomWord,
    getAllWords
};
