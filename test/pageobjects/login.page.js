import Page from './page';

class LoginPage extends Page {

    open() {
        super.open('controller=authentication');
    }

    get signInButton() {
        return $('#SubmitLogin');
    }

    get emailField() {
        return $('#email');
    }

    get passwordField() {
        return $('#passwd');
    }

    get validationMessageText() {
        return $$('ol')[0].getText();
    }

    submitRegistrationForm = (email, password) => {
        this.emailField.setValue(email);
        this.passwordField.setValue(password);
        this.signInButton.click();
    };

    isValidationMessageShown = () => {
        let validationArea = $('.alert alert-danger');
        return typeof validationArea !== 'undefined';
    };

}

export default new LoginPage();