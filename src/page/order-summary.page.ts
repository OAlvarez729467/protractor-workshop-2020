import { browser, protractor, ElementArrayFinder, $$ } from 'protractor';

export class OrderSummaryPage {
  private proceedButton: ElementArrayFinder;

  constructor () {
    this.proceedButton = $$('a[title*="Proceed"]');
  }

  public async proceedCheckout(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.proceedButton.last()), 1500);
    await this.proceedButton.last().click();
  }
}
