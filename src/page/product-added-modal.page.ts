import { browser, protractor, ElementArrayFinder, $$ } from 'protractor';

export class ProductAddedPage {
  private checkoutButton: ElementArrayFinder;

  constructor () {
    this.checkoutButton = $$('[title*="Proceed"]');
  }

  public async checkoutProduct(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.checkoutButton.last()), 2000);
    await this.checkoutButton.last().click();
  }
}
