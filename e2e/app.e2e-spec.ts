import { EventoLfdevAdminPage } from './app.po';

describe('evento-lfdev-admin App', () => {
  let page: EventoLfdevAdminPage;

  beforeEach(() => {
    page = new EventoLfdevAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
