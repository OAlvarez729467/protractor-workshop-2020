import { $, ElementFinder, protractor, browser } from 'protractor';

export class OrderSummaryPage {
  private proceedButton: ElementFinder;

  constructor () {
    this.proceedButton = $('.cart_navigation span');
  }

  public async proceedCheckout(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.proceedButton), 1500);
    await this.proceedButton.click();
  }
}
