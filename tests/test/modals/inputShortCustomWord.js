'use strict';

module.exports = {
    'Input short custom word': client => {
        const appPage     = client.page.appPage();
        const pageButtons = appPage.section.buttons;

        const customWordModal = client.page.customWordModal();
        const modalButtons    = customWordModal.section.buttons;

        const customWord = 'aa';

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);

        pageButtons.click('@customButton');
        customWordModal.waitForElementVisible('@modal', 3000);
        customWordModal.waitForElementVisible('@body', 3000);

        customWordModal.inputValue(client, customWord);
        modalButtons.click('@submitButton');

        appPage.waitForElementVisible('@appPage', 3000);
        customWordModal.waitForElementNotPresent('@modal', 3000);

        let newWord = '';

        client.elements('class name', 'CharBox', function(res) {
            for ( let index = 1; index <= res.value.length; index++ ) {
                const className = `.CharBox:nth-child(${index})`;

                this.getText(className, function(text){
                    newWord += text.value;
                });
            }
        }).perform( function() {
            client.assert.equal(newWord, customWord.toLowerCase());
        });

        appPage.expect.element('@userWord').text.to.equal('');
        appPage.expect.element('@allWords').text.to.equal('No words. Maybe word is too short or does not exist');

        client.elements('class name', 'Word', function(res) {
            client.assert.equal(res.value.length, 0);
        });

        client.pause(2000);
        client.end();
    }
};
