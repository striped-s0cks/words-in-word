import _ from 'lodash';

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
    const allWords = [];
    const wordMap = {};

    word.split('').forEach( letter => {
        wordMap[letter] = wordMap[letter] || 0;

        wordMap[letter]++;
    });

    words.forEach( allowedWord => {
        if ( ( allowedWord.length <= word.length ) && ( allowedWord !== word ) ) {
            const wordMapCopy = _.cloneDeep(wordMap);
            const letters = allowedWord.split('');

            letters.forEach( letter => {
                wordMapCopy[letter] = wordMapCopy[letter] || 0;

                wordMapCopy[letter]--;
            });

            let hasOtherChars;

            for ( const letter in wordMapCopy ) {
                if ( wordMapCopy.hasOwnProperty(letter) && wordMapCopy[letter] < 0 ) {
                    hasOtherChars = true;
                }
            }

            if ( !hasOtherChars ) {
                const chars = letters.map( letter => {
                    return {
                        value: letter,
                        isShown: false
                    };
                });

                allWords.push({
                    value: allowedWord,
                    isShown: false,
                    length: allowedWord.length, // for easy sorting
                    chars
                });
            }
        }
    });

    return _.sortBy(allWords, ['length', 'value']);
}

module.exports = {
    getRandomWord,
    getAllWords
};
