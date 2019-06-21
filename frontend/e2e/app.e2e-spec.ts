import { AngularProjectPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('angular-project TESTE', function() {
  let page: AngularProjectPage;

  beforeEach(() => {
    page = new AngularProjectPage();
  });

  it('Button text should be register', () => {
    browser.get('http://localhost:4200/signup');
    expect(browser.getButtonText()).toEqual('Register');
  });

});
