import { browser, by, element } from 'protractor';

export class AppPage {

  static domainName = 'http://localhost:4200';

  navigateTo(link) {
    return browser.get(link);
  }

  getElementText(selector) {
    return element(by.css(selector)).getText();
  }

  getElementBySelector(selector) {
    return element(by.css(selector));
  }

  getElementByText(el, text) {
    return element(by.cssContainingText(el, text));
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

}
