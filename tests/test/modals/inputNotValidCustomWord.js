'use strict';

module.exports = {
    'Input custom word': client => {
        const appPage     = client.page.appPage();
        const pageButtons = appPage.section.buttons;

        const customWordModal = client.page.customWordModal();
        const modalButtons    = customWordModal.section.buttons;
        const modalBody       = customWordModal.section.body;

        const numbers   = '234234234';
        const symbols   = '/.,@#$;';
        const otherLang = 'нежданчик';

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);

        pageButtons.click('@customButton');
        customWordModal.waitForElementVisible('@modal', 3000);
        customWordModal.waitForElementVisible('@body', 3000);

        client.pause(500);
        modalButtons.click('@submitButton');
        modalBody.waitForElementVisible('@label', 3000);
        modalBody.expect.element('@label').text.to.equal('Valid characters are [a-z]');

        client.pause(500);
        customWordModal.inputValue(client, numbers);
        modalButtons.click('@submitButton');
        modalBody.waitForElementVisible('@label', 3000);
        modalBody.expect.element('@label').text.to.equal('Valid characters are [a-z]');

        client.pause(500);
        customWordModal.inputValue(client, symbols);
        modalButtons.click('@submitButton');
        modalBody.waitForElementVisible('@label', 3000);
        modalBody.expect.element('@label').text.to.equal('Valid characters are [a-z]');

        client.pause(500);
        customWordModal.inputValue(client, otherLang);
        modalButtons.click('@submitButton');
        modalBody.waitForElementVisible('@label', 3000);
        modalBody.expect.element('@label').text.to.equal('Valid characters are [a-z]');

        client.pause(500);
        modalButtons.click('@closeButton');

        appPage.waitForElementVisible('@appPage', 3000);
        customWordModal.waitForElementNotPresent('@modal', 3000);

        client.pause(2000);
        client.end();
    }
};
