const browser = require('../src/browser/browser');

(async()=>{

await browser.connect();

const page = await browser.page();

console.log(await page.title());

})();
