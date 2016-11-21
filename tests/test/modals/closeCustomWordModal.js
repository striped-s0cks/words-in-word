'use strict';

module.exports = {
    'Close custom word modal': client => {
        const appPage     = client.page.appPage();
        const pageButtons = appPage.section.buttons;

        const customWordModal = client.page.customWordModal();
        const modalButtons    = customWordModal.section.buttons;

        appPage.open();

        appPage.waitForElementVisible('@appPage', 3000);
        appPage.waitForElementVisible('@buttons', 3000);

        pageButtons.click('@customButton');

        customWordModal.waitForElementVisible('@modal', 3000);
        customWordModal.waitForElementVisible('@header', 3000);
        customWordModal.waitForElementVisible('@body', 3000);
        customWordModal.waitForElementVisible('@footer', 3000);
        modalButtons.waitForElementVisible('@closeButton', 3000);
        modalButtons.waitForElementVisible('@submitButton', 3000);

        client.pause(500);
        modalButtons.click('@closeButton');

        appPage.waitForElementVisible('@appPage', 3000);
        customWordModal.waitForElementNotPresent('@modal', 3000);

        client.pause(2000);
        client.end();
    }
};
