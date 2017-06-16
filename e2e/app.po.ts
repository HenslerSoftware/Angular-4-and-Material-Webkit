import { browser, element, by } from 'protractor';

export class Ng4MaterialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    console.log('Running Test 1');
    return element(by.css('app-root h1')).getText();
  }
}
