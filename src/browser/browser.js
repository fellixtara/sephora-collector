const { chromium } = require('playwright');
const config = require('../config/default');
const logger = require('../utils/logger');

class BrowserManager {

    constructor() {
        this.browser = null;
        this.context = null;
        this.pageInstance = null;
    }

    async connect() {

        logger.info("Connecting CDP...");

        this.browser = await chromium.connectOverCDP(
            config.browser.cdp
        );

        this.context = this.browser.contexts()[0];

        logger.info("Connected.");

    }

    async page() {

        if (this.pageInstance)
            return this.pageInstance;

        const pages = this.context.pages();

        if (pages.length) {

            this.pageInstance = pages[0];

        } else {

            this.pageInstance = await this.context.newPage();

        }

        return this.pageInstance;

    }

    async close() {

        if (this.browser)
            await this.browser.close();

    }

}

module.exports = new BrowserManager();
