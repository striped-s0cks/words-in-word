import React from 'react';

import Word from '../inputs/Word.jsx';

import './AllWords.less';

export default class AllWords extends React.Component {
    render() {
        return (
            <div className='AllWords'>
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
}
