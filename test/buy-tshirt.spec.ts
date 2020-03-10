import { browser } from 'protractor';
import { MenuContentPage, ProductAddedPage, ProductListPage,
  OrderSummaryPage, SignInPage, AddressPage, BankPaymentPage,
  ShippingPage, PaymentPage, SummaryPage} from '../src/page';

describe('Buy a t-shirt', () => {

  describe('Given a shopping page', () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('When buy a T-Shirt', () => {
      beforeAll(async () => {
        const menuContentPage: MenuContentPage = new MenuContentPage();
        const productListPage:  ProductListPage = new ProductListPage();
        const productAddedPage:  ProductAddedPage = new ProductAddedPage();
        const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
        await menuContentPage.goToTShirtMenu();
        await productListPage.addProduct();
        await productAddedPage.checkoutProduct();
        await orderSummaryPage.proceedCheckout();
      });

      describe('and sing-in in the page', () => {
        beforeAll(async () => {
          const signInPage: SignInPage = new SignInPage();
          await signInPage.emailFill('aperdomobo@gmail.com');
          await signInPage.passwordFill('WorkshopProtractor');
          await signInPage.signIn();
        });

        describe('and select the default address', () => {
          beforeAll(async () => {
            const addressPage: AddressPage = new AddressPage();
            const shippingPage: ShippingPage = new ShippingPage();
            await addressPage.proceedAddress();
            await shippingPage.agreeTerms();
            await shippingPage.proceedShipping();
          });

          it('then should be bought a t-shirt', async () => {
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            const summaryPage: SummaryPage = new SummaryPage();
            const paymentPage: PaymentPage = new PaymentPage();
            await bankPaymentPage.payBankOption();
            await summaryPage.confirmOrder();
            await paymentPage.payBankOption('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
