import React from 'react';

import './CharBox.less';

export default class CharBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false
        };
    }

    handleClick() {
        if ( !this.state.isClicked ) {
            this.setState({
                isClicked: true
            });

            this.props.onCharClick(this.props.value);
        }
    }

    render() {
        return (
            <div className='CharBox'>
                <input
                    className = {this.state.isClicked ? 'clicked' : ''}
                    value     = {this.props.value}
                    type      = 'text'
                    onClick   = {this.handleClick.bind(this)}
                    readOnly />
            </div>
        );
    }
}
