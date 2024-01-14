import { truncateText } from './truncateText';

describe('truncateText function', () => {
  it('should truncate text correctly when it exceeds maxLength', () => {
    const inputText = 'This is a long text that needs to be truncated';
    const maxLength = 10;
    const expectedOutput = 'This is a ...';

    const result = truncateText(inputText, maxLength);

    expect(result).toEqual(expectedOutput);
  });

  it('should not truncate text when it is within maxLength', () => {
    const inputText = 'ShortText';
    const maxLength = 20;

    const result = truncateText(inputText, maxLength);

    expect(result).toEqual(inputText);
  });

  it('should return empty string when input text is empty', () => {
    const inputText = '';
    const maxLength = 10;

    const result = truncateText(inputText, maxLength);

    expect(result).toEqual('');
  });

  it('should return the entire text when maxLength is greater than the text length', () => {
    const inputText = 'ShortText';
    const maxLength = 20;

    const result = truncateText(inputText, maxLength);

    expect(result).toEqual(inputText);
  });
});
