import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  clickFirstSpeaker() {
    return element.all(by.css('.speakers a')).first().click();
  }

  getFirstSpeakerName() {
    return element.all(by.css('.speakers a h3')).first().getText();
  }

  getNameInput() {
    return element(by.css('input[name="name"]')).getAttribute('value');
  }

  updateName(name) {
    element(by.css('input[name="name"]')).clear();
    return element(by.css('input[name="name"]')).sendKeys(name);
  }
}
