import { $, ElementFinder } from 'protractor';

export class AddressPage {
  private proceedButton: ElementFinder;

  constructor () {
    this.proceedButton = $('#center_column > form > p > button > span');
  }

  public async proceedAddress(): Promise<void> {
    await this.proceedButton.click();
  }
}
