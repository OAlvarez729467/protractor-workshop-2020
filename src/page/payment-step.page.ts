import { $, ElementFinder, protractor, browser } from 'protractor';

export class PaymentPage {
  private successLabel: ElementFinder;

  constructor () {
    this.successLabel = $('#center_column > div > p > strong');
  }

  public async payBankOption(expected:string): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.textToBePresentInElement(this.successLabel, expected), 1500);
    await expect(this.successLabel.getText()).toBe(expected);
  }
}
