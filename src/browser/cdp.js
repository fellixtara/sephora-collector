const CDP = require('chrome-remote-interface');
const config = require('../config/default');

module.exports = async () => {

    return CDP({

        target: config.browser.cdp

    });

};
