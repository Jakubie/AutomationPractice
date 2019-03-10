import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page';

describe('Login page', () => {
    it('should be accessible from the home page', () => {
        HomePage.open();
        HomePage.signInButton.click();
        const loginPageTitle = browser.getTitle();
        assert.equal(loginPageTitle, 'Login - My Store');
    });

    it('should show validation message when no credentials are entered', () => {
        LoginPage.open();
        LoginPage.submitRegistrationForm('','');
        assert.equal(LoginPage.isValidationMessageShown(), true);
        assert.equal(LoginPage.validationMessageText, "An email address required.");
    });

    it('should show validation message when incorrect credentials are entered', () => {
        LoginPage.open();
        LoginPage.submitRegistrationForm('test@test.com', 'incorrect');
        assert.equal(LoginPage.isValidationMessageShown(), true);
        assert.equal(LoginPage.validationMessageText, "Authentication failed.");
    });
});