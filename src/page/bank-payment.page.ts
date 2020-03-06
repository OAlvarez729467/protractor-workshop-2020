import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private bankPayButton: ElementFinder;

  constructor () {
    this.bankPayButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payBankOption(): Promise<void> {
    await this.bankPayButton.click();
  }
}
