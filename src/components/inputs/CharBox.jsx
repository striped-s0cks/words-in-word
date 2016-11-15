import React from 'react';

import './CharBox.less';

export default class CharBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if ( !nextProps.isEdited ) {
            this.setState({
                isClicked: false
            });
        }
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
        const classes = 'char' + (this.state.isClicked ? ' clicked' : '');

        return (
            <div className='CharBox'>
                <div
                    className = {classes}
                    onClick   = {this.handleClick.bind(this)}>
                        {this.props.value}
                </div>
            </div>
        );
    }
}
