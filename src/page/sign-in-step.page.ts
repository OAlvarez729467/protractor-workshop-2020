import { $, ElementFinder, protractor, browser } from 'protractor';

export class SignInPage {
  private emailText: ElementFinder;
  private passwordText: ElementFinder;
  private signinButton: ElementFinder;

  constructor () {
    this.emailText = $('#email');
    this.passwordText = $('#passwd');
    this.signinButton = $('#SubmitLogin > span');
  }
  public async emailFill(email:string): Promise<void> {
    const ec = protractor.ExpectedConditions;
    const pres = ec.presenceOf(this.emailText);
    const visi = ec.visibilityOf(this.emailText);
    await browser.wait(ec.and(pres, visi), 1500);
    await this.emailText.sendKeys(email);
  }

  public async passwordFill(pass:string): Promise<void> {
    const ec = protractor.ExpectedConditions;
    const pres = ec.presenceOf(this.passwordText);
    const visi = ec.visibilityOf(this.passwordText);
    await browser.wait(ec.and(pres, visi), 1500);
    await this.passwordText.sendKeys(pass);
  }

  public async signIn(): Promise<void> {
    const ec = protractor.ExpectedConditions;
    await browser.wait(ec.elementToBeClickable(this.signinButton), 1500);
    await this.signinButton.click();
  }
}
