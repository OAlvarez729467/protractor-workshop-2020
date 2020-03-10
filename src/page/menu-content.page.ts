import { browser, protractor, ElementArrayFinder, $$ } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementArrayFinder;

  constructor () {
    this.tShirtMenu = $$('a[title="T-shirts"]');
  }

  public async goToTShirtMenu(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.tShirtMenu.last()), 1500);
    await this.tShirtMenu.last().click();
  }
}
