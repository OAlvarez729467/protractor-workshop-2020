import { $, ElementFinder, browser, protractor } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
  }

  public async goToTShirtMenu(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.tShirtMenu), 1500);
    await this.tShirtMenu.click();
  }
}
