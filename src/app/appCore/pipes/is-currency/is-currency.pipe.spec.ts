import { IsCurrencyPipe } from './is-currency.pipe';

describe('IsCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new IsCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
