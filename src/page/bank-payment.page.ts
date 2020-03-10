import { $, ElementFinder, protractor, browser } from 'protractor';

export class BankPaymentPage {
  private bankPayButton: ElementFinder;

  constructor () {
    this.bankPayButton = $('[title*="Pay by bank"]');
  }

  public async payBankOption(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.bankPayButton), 1500);
    await this.bankPayButton.click();
  }
}
