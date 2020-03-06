import { $, ElementFinder } from 'protractor';

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
    await this.emailText.sendKeys(email);
  }

  public async passwordFill(pass:string): Promise<void> {
    await this.passwordText.sendKeys(pass);
  }

  public async signIn(): Promise<void> {
    await this.signinButton.click();
  }
}
