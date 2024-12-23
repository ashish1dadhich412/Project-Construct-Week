import Link from "../../support/Page Object Model/link.cy";
import Login from "../../support/Page Object Model/login.cy";
import Homepage from "../../support/Page Object Model/HomePage.cy";

describe('Add Item to Cart Test', () => {
    const login1 = new Login();
    const link1 = new Link();
    const homepage = new Homepage();

    it('should add an item to the cart and navigate back', () => {
        homepage.visit();
        homepage.homepage();
    });

    it.skip('Login and account test', () => {
        login1.Url();
        login1.Account();
    });
    
});
