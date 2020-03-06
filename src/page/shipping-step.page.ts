import { $, ElementFinder } from 'protractor';

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
    await this.proceedButton.click();
  }
}
