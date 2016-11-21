'use strict';

const aboutModalCommands = {
    close: function() {

    }
};

module.exports = {
    commands: [aboutModalCommands],

    elements: {
        modal:  '.Modal .modal-dialog',
        header: '.Modal .modal-header',
        body:   '.Modal .modal-body',
        footer: '.Modal .modal-footer'
    },

    sections: {
        buttons: {
            selector: '.modal-footer',
            elements: {
                closeButton:  '.closeButton',
                submitButton: '.submitButton'
            }
        }
    }
};
