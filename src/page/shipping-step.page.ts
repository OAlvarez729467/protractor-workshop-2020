import { $, ElementFinder, protractor, browser } from 'protractor';

export class ShippingPage {
  private agreeCheckBox: ElementFinder;
  private proceedButton: ElementFinder;

  constructor () {
    this.agreeCheckBox = $('#cgv');
    this.proceedButton = $('#form > p > button > span');
  }

  public async agreeTerms(): Promise<void> {
    await this.agreeCheckBox.click();
  }

  public async proceedShipping(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.proceedButton), 1500);
    await this.proceedButton.click();
  }
}
