import React from 'react';

import CharBox from '../inputs/CharBox.jsx';

import './InitialWord.less';

export default class InitialWord extends React.Component {
    render() {
        const {
            value,
            isEdited,

            onCharClick
        } = this.props;

        const chars = value ? value.split('') : [];

        return (
            <div className='InitialWord'>
                {
                    chars.map( ( item, key ) => {
                        return (
                            <CharBox
                                key         = {key}
                                value       = {item}
                                isEdited    = {isEdited}

                                onCharClick = {onCharClick} />
                        );
                    })
                }
            </div>
        );
    }
}
