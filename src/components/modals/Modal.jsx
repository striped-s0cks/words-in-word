import React from 'react';

import { Button, Modal as ReactModal } from 'react-bootstrap';

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

        const closeButtonClasses = 'closeButton' + ( isCloseButtonHidden ? 'hidden' : '' );
        const submitButtonClasses = 'submitButton' + ( isSubmitButtonHidden ? ' hidden' : '' );

        return (
            <ReactModal
                className = {className}
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
                        onClick   = {onSave}>
                            Play
                    </Button>
                </ReactModal.Footer>
            </ReactModal>
        );
    }
}
