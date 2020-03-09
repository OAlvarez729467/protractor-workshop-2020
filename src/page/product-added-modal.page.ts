import { $, ElementFinder, protractor, browser } from 'protractor';

export class ProductAddedPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async checkoutProduct(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.checkoutButton), 1500);
    await this.checkoutButton.click();
  }
}
