import { $, ElementFinder } from 'protractor';

export class PaymentPage {
  private successLabel: ElementFinder;

  constructor () {
    this.successLabel = $('#center_column > div > p > strong');
  }

  public async payBankOption(expected:string): Promise<void> {
    await expect(this.successLabel.getText()).toBe(expected);
  }
}
