import { $, ElementFinder, protractor, browser } from 'protractor';

export class ProductListPage {
  private addCartButton: ElementFinder;

  constructor () {
    this.addCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addProduct(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.addCartButton), 1500);
    await this.addCartButton.click();
  }
}
