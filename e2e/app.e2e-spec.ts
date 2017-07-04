import { ExpressShipmentWebPage } from './app.po';

describe('express-shipment-web App', () => {
  let page: ExpressShipmentWebPage;

  beforeEach(() => {
    page = new ExpressShipmentWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
