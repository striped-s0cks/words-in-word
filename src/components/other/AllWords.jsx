import React from 'react';

import Word from '../inputs/Word.jsx';

import './AllWords.less';

export default class AllWords extends React.Component {
    render() {
        return (
            <div className='AllWords'>
                {this._renderWords()}
            </div>
        );
    }

    _renderWords() {
        if ( this.props.words.length ) {
            return (
                <div className='list'>
                    <ul>
                        {
                            this.props.words.map( (item, key) => {
                                return (
                                    <li key={key}>
                                        <Word value={item} />
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            );
        }

        return (
            <p className='warning'>
                No words. Maybe word is too short or does not exist
            </p>
        );
    }
}
