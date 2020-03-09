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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.addProduct();
    await productAddedPage.checkoutProduct();
    await orderSummaryPage.proceedCheckout();
    await signInPage.emailFill('aperdomobo@gmail.com');
    await signInPage.passwordFill('WorkshopProtractor');
    await signInPage.signIn();
    await addressPage.proceedAddress();
    await shippingPage.agreeTerms();
    await shippingPage.proceedShipping();
    await bankPaymentPage.payBankOption();
    await summaryPage.confirmOrder();
    await paymentPage.payBankOption('Your order on My Store is complete.');
  });
});
