import Page from './page';

class HomePage extends Page {

    open() {
        super.open();
    }

    get signInButton() {
        return $('=Sign in');
    }
}

export default new HomePage();