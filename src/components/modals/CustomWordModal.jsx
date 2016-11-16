import React from 'react';

import Modal from './Modal.jsx';

const ENTER_CODE = 13;

import './CustomWordModal.less';

export default class CustomWordModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isError: false
        };
    }

    handleSubmit() {
        if ( this.refs.input.validity.valid ) {
            this.props.onSubmit(this.refs.input.value.toLowerCase());
        } else {
            this.setState({
                isError: true
            });
        }
    }

    handleClose() {
        this.setState({
            isError: false
        });

        this.props.onHide();
    }

    handleKeyDown(e) {
        if ( this.refs.input.validity.valid ) {
            this.setState({
                isError: false
            });
        }

        if ( e.keyCode === ENTER_CODE ) {
            this.handleSubmit();
        }
    }

    render() {
        const labelClass = this.state.isError ? '' : 'hidden';

        return (
            <Modal
                className = 'CustomWordModal'
                isOpen    = {this.props.isOpen}
                title     = 'Insert your own word'
                onSave    = {this.handleSubmit.bind(this)}
                onHide    = {this.handleClose.bind(this)}>

                <label
                    htmlFor   = 'input'
                    className = {labelClass}>
                        Valid characters are [a-z]
                </label>

                <input
                    ref         = 'input'
                    id          = 'input'
                    type        = 'text'
                    placeholder = 'Your word'
                    pattern     = '[a-zA-Z]*'
                    onKeyDown   = {this.handleKeyDown.bind(this)}
                    required />
            </Modal>
        );
    }
}
