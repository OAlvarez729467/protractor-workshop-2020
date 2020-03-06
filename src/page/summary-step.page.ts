import { $, ElementFinder } from 'protractor';

export class SummaryPage {
  private confirmButton: ElementFinder;

  constructor () {
    this.confirmButton = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmButton.click();
  }
}
