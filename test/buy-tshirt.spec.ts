import { browser } from 'protractor';
import { MenuContentPage, ProductAddedPage, ProductListPage,
  OrderSummaryPage, SignInPage, AddressPage, BankPaymentPage,
  ShippingPage, PaymentPage, SummaryPage} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage:  ProductListPage = new ProductListPage();
  const productAddedPage:  ProductAddedPage = new ProductAddedPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const signInPage: SignInPage = new SignInPage();
  const addressPage: AddressPage = new AddressPage();
  const shippingPage: ShippingPage = new ShippingPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const summaryPage: SummaryPage = new SummaryPage();
  const paymentPage: PaymentPage = new PaymentPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.addProduct();
    await(browser.sleep(3000));
    await productAddedPage.checkoutProduct();
    await(browser.sleep(3000));
    await orderSummaryPage.proceedCheckout();
    await(browser.sleep(3000));
    await signInPage.emailFill('aperdomobo@gmail.com');
    await signInPage.passwordFill('WorkshopProtractor');
    await signInPage.signIn();
    await(browser.sleep(3000));
    await addressPage.proceedAddress();
    await(browser.sleep(3000));
    await shippingPage.agreeTerms();
    await(browser.sleep(3000));
    await shippingPage.proceedShipping();
    await(browser.sleep(3000));
    await bankPaymentPage.payBankOption();
    await(browser.sleep(3000));
    await summaryPage.confirmOrder();
    await(browser.sleep(3000));
    await paymentPage.payBankOption('Your order on My Store is complete.');
  });
});
