import { $, ElementFinder, protractor, browser } from 'protractor';

export class AddressPage {
  private proceedButton: ElementFinder;

  constructor () {
    this.proceedButton = $('#center_column > form > p > button > span');
  }

  public async proceedAddress(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.proceedButton), 1500);
    await this.proceedButton.click();
  }
}
