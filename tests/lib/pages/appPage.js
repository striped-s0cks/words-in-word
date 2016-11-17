'use strict';

const appPageCommands = {
    open: function() {
        this.api.maximizeWindow();
        this.navigate();

        return this;
    }
};

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },

    commands: [appPageCommands],

    elements: {
        appPage:     '.App',
        buttons:     '.WordButtons',
        initialWord: '.InitialWord',
        userWord:    '.UserWord',
        allWords:    '.AllWords'
    },

    sections: {
        buttons: {
            selector: '.WordButtons',
            elements: {
                generateButton: '.generateButton',
                clearButton:    '.clearButton',
                helpButton:     '.helpButton',
                customButton:   '.customButton',
                aboutButton:    '.aboutButton'
            }
        },

        allWords: {
            selector: '.AllWords',
            elements: {
                firstValidWord: 'ul li:nth-child(1)',
                warning:        '.warning'
            }
        }
    }
};

