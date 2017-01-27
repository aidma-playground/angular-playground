import { Ng2ScrollspyPage } from './app.po';

describe('ng2-scrollspy App', function() {
  let page: Ng2ScrollspyPage;

  beforeEach(() => {
    page = new Ng2ScrollspyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
