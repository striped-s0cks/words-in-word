import React from 'react';

import './UserWord.less';

export default class UserWord extends React.Component {
    render() {
        const {
            value
        } = this.props;

        return (
            <div className='UserWord'>
                {value}
            </div>
        );
    }
}
