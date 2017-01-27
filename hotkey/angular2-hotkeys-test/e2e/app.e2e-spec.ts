import { HotkeyTestPage } from './app.po';

describe('hotkey-test App', function() {
  let page: HotkeyTestPage;

  beforeEach(() => {
    page = new HotkeyTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
