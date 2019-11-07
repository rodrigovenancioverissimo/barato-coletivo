import { MeatPage } from './app.po';

describe('meat App', function() {
  let page: BaratoColetivoPage;

  beforeEach(() => {
    page = new BaratoColetivoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bc works!');
  });
});
