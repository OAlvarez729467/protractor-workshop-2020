import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private proceedButton: ElementFinder;

  constructor () {
    this.proceedButton = $('.cart_navigation span');
  }

  public async proceedCheckout(): Promise<void> {
    await this.proceedButton.click();
  }
}
