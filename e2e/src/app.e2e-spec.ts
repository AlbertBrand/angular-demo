import { AppPage } from './app.po';

describe('CMD App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('CMD Angular demo');
  });

  it('opens details for speaker', () => {
    page.clickFirstSpeaker();
    expect(page.getNameInput()).toEqual('Albert Brand')
  })

  it('updates name when input changes', () => {
    page.updateName('abc');
    expect(page.getFirstSpeakerName()).toEqual('abc')
  })
});
