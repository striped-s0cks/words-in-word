import React from 'react';

import { Button, Modal } from 'react-bootstrap';

const ENTER_CODE = 13;

import './CustomWordModal.less';

export default class CustomWordModal extends React.Component {
    handleSubmit() {
        if ( this.refs.input.validity.valid ) {
            this.props.onSubmit(this.refs.input.value.toLowerCase());
        }
    }

    handleKeyDown(e) {
        if ( e.keyCode === ENTER_CODE ) {
            this.handleSubmit();
        }
    }

    render() {
        const {
            isOpen,
            onHide
        } = this.props;

        return (
            <Modal
                className = 'CustomWordModal'
                show      = {isOpen}
                onHide    = {onHide}>

                <Modal.Header closeButton>
                    <Modal.Title>
                        Insert your own word
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input
                        ref         = 'input'
                        type        = 'text'
                        placeholder = 'Your word'
                        pattern     = '[a-zA-Z]*'
                        onKeyDown   = {this.handleKeyDown.bind(this)}
                        required />
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        className = 'closeButton'
                        onClick   = {onHide}>
                            Close
                    </Button>

                    <Button
                        className = 'submitButton'
                        bsStyle   = 'primary'
                        onClick   = {this.handleSubmit.bind(this)}>
                            Play
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
