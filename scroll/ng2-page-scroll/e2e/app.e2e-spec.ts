import { Ng2PageScrollPage } from './app.po';

describe('ng2-page-scroll App', function() {
  let page: Ng2PageScrollPage;

  beforeEach(() => {
    page = new Ng2PageScrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
