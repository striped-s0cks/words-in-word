'use strict';

const customWordModalCommands = {
    inputValue: function(client, value) {
        client.pause(200);

        this.section.body.waitForElementVisible('@input', 3000)
                         .setValue('@input', value);

        client.pause(200);

        return this;
    }
};

module.exports = {
    commands: [customWordModalCommands],

    elements: {
        modal:  '.Modal .modal-dialog',
        header: '.Modal .modal-header',
        body:   '.Modal .modal-body',
        footer: '.Modal .modal-footer'
    },

    sections: {
        body: {
            selector: '.Modal .modal-body',
            elements: {
                label: 'label',
                input: 'input'
            }
        },

        buttons: {
            selector: '.modal-footer',
            elements: {
                closeButton:  '.closeButton',
                submitButton: '.submitButton'
            }
        }
    }
};
