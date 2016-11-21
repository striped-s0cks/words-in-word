'use strict';

module.exports = {
    'Close custom word modal': client => {
        const appPage     = client.page.appPage();
        const pageButtons = appPage.section.buttons;

        const customWordModal = client.page.customWordModal();
        const modalButtons    = customWordModal.section.buttons;
        const modalBody       = customWordModal.section.body;

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);
        appPage.waitForElementVisible('@initialWord', 3000);

        let initialWord = '';
        let wordAfterClose = '';

        client.elements('class name', 'CharBox', function(res) {
            for ( let index = 1; index <= res.value.length; index++ ) {
                const className = `.CharBox:nth-child(${index})`;

                this.getText(className, function(text){
                    initialWord += text.value;
                });
            }
        }).perform( function() {
            pageButtons.click('@customButton');

            customWordModal.waitForElementVisible('@modal', 3000);
            customWordModal.waitForElementVisible('@header', 3000);
            customWordModal.waitForElementVisible('@body', 3000);
            customWordModal.waitForElementVisible('@footer', 3000);

            modalButtons.waitForElementVisible('@closeButton', 3000);
            modalButtons.waitForElementVisible('@submitButton', 3000);

            modalBody.waitForElementVisible('@input', 3000);
            modalBody.waitForElementNotVisible('@label', 3000);

            client.pause(500);
            modalButtons.click('@closeButton');

            appPage.waitForElementVisible('@appPage', 3000);
            customWordModal.waitForElementNotPresent('@modal', 3000);

            client.elements('class name', 'CharBox', function(res) {
                for ( let index = 1; index <= res.value.length; index++ ) {
                    const className = `.CharBox:nth-child(${index})`;

                    this.getText(className, function(text){
                        wordAfterClose += text.value;
                    });
                }
            })
        }).perform( function() {
            client.assert.equal(initialWord, wordAfterClose);
        });

        client.pause(2000);
        client.end();
    }
};
