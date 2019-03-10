export default class Page {
    open(path) {
        const baseURL = 'http://automationpractice.com/';
        if (typeof  path !== "undefined") {
            browser.url(baseURL + 'index.php?' + path);
        } else {
            browser.url(baseURL);
        }
    }
};