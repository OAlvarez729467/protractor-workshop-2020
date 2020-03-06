import { $, ElementFinder } from 'protractor';

export class ProductAddedPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async checkoutProduct(): Promise<void> {
    await this.checkoutButton.click();
  }
}
