import { $, ElementFinder, protractor, browser } from 'protractor';

export class SummaryPage {
  private confirmButton: ElementFinder;

  constructor () {
    this.confirmButton = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.confirmButton), 1500);
    await this.confirmButton.click();
  }
}
