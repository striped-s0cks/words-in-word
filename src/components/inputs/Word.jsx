import React from 'react';

import './Word.less';

export default class Word extends React.Component {
    render() {
        const value = this.props.value;

        const text = value.isShown ? value.value : this._hideWord();

        return (
            <div className='Word'>
                {text}
            </div>
        );
    }

    _hideWord() {
        let hiddenWord = '';

        this.props.value.chars.forEach( item => {
            hiddenWord += item.isShown ? item.value : '_';
        });

        return hiddenWord;
    }
}
