import React from 'react';

import { Button, Modal as ReactModal } from 'react-bootstrap';

import './Modal.less';

export default class Modal extends React.Component {
    render() {
        const {
            className,
            isOpen,
            isSubmitButtonHidden,
            isCloseButtonHidden,
            onSave,
            onHide,
            title,
            children
        } = this.props;

        const classes = 'Modal ' + className;
        const closeButtonClasses = 'closeButton' + ( isCloseButtonHidden ? 'hidden' : '' );
        const submitButtonClasses = 'submitButton' + ( isSubmitButtonHidden ? ' hidden' : '' );

        return (
            <ReactModal
                className = {classes}
                show      = {isOpen}
                onHide    = {onHide}>

                <ReactModal.Header closeButton>
                    <ReactModal.Title>
                        {title}
                    </ReactModal.Title>
                </ReactModal.Header>

                <ReactModal.Body>
                    {children}
                </ReactModal.Body>

                <ReactModal.Footer>
                    <Button
                        className = {closeButtonClasses}
                        onClick   = {onHide}>
                            Close
                    </Button>

                    <Button
                        className = {submitButtonClasses}
                        bsStyle   = 'primary'
                        onClick   = {this._unpress.bind(this, onSave)}>
                            Play
                    </Button>
                </ReactModal.Footer>
            </ReactModal>
        );
    }

    // button stays pressed after mouseUp
    _unpress(onClickFunction) {
        $('button').blur();

        onClickFunction();
    }
}
