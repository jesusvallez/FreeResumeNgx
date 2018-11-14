import { ConcatHtmlPipe } from './concat-html.pipe';

describe('ConcatHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
