import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addCartButton: ElementFinder;

  constructor () {
    this.addCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addProduct(): Promise<void> {
    await this.addCartButton.click();
  }
}
