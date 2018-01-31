const capitalize = require('./capitalize');

describe('capitalize', () => {
  it('take a word and capitlizes the first caracters', () => {
      expect(capitalize('hi')).toBe('Hi');
  });
  it('takes a sentence and only capitalizes the first word', () => {
    expect(capitalize('how now, brown cow')).toBe('How now, brown cow');
  });
  it('ignores non letter characters if they start the string', () => {
    expect(capitalize('/index.html')).toBe('/index.html');
  });
});