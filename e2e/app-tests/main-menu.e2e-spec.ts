import { AppPage } from '../app.po';

export default describe('Budget Manager App Main Menu', () => {
  let page: AppPage;
  const domainName = AppPage.domainName;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/main');
  });

  it('should display Budget Manager', () => {
    expect(page.getElementText('.app-name')).toEqual('Budget Manager');
  });

  it('side navigation button should exist', () => {
    const navBtn = page.getElementByText('button>span>mat-icon', 'menu');
    expect(navBtn.isPresent()).toBe(true);
  });

  it('exit from App button should exist', () => {
    const exitBtn = page.getElementByText('button>span>mat-icon', 'power_settings_new');
    expect(exitBtn.isPresent()).toBe(true);
  });

  it('originally side menu should be hidden', () => {
    const sideNavMenu = page.getElementBySelector('.mat-sidenav');
    expect(sideNavMenu.getCssValue('visibility')).toEqual('hidden');
  });

  it('when click on sidenav button side menu should appear', () => {
    const navBtn = page.getElementByText('button>span>mat-icon', 'menu');
    navBtn.click();
    const sideNavMenu = page.getElementBySelector('.mat-sidenav');
    expect(sideNavMenu.getCssValue('visibility')).toEqual('visible');
  });

  it(`when click on Add New Transaction you shold move to ${domainName}/main/add-transaction`,
  () => {
    const navBtn = page.getElementByText('button>span>mat-icon', 'menu');
    navBtn.click();
    const addNewTransactionBtn = page.getElementByText('mat-nav-list>a>div', 'Add New Transaction');
    addNewTransactionBtn.click();
    expect(page.getCurrentUrl()).toEqual(`${domainName}/main/add-transaction`);
  });

  it(`when click on Transactions List you shold move to ${domainName}/main/transactions-list`,
  () => {
    const navBtn = page.getElementByText('button>span>mat-icon', 'menu');
    navBtn.click();
    const transactionsListBtn = page.getElementByText('mat-nav-list>a>div', 'Transactions List');
    transactionsListBtn.click();
    expect(page.getCurrentUrl()).toEqual(`${domainName}/main/transactions-list`);
  });

  it(`when click on Transactions By Type you shold move to ${domainName}/main/transactions-list`,
  () => {
    const navBtn = page.getElementByText('button>span>mat-icon', 'menu');
    navBtn.click();
    const transactionsByTypeBtn = page.getElementByText('mat-nav-list>a>div', 'Transactions By Type');
    transactionsByTypeBtn.click();
    expect(page.getCurrentUrl()).toEqual(`${domainName}/main/transactions-list`);
  });

  it(`when click on App Configuration you shold move to ${domainName}/main/configuration`,
  () => {
    const navBtn = page.getElementByText('button>span>mat-icon', 'menu');
    navBtn.click();
    const appConfigurationBtn = page.getElementByText('mat-nav-list>a>div', 'App Configuration');
    appConfigurationBtn.click();
    expect(page.getCurrentUrl()).toEqual(`${domainName}/main/configuration`);
  });

});
