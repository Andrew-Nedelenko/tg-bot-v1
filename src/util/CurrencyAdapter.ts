import { CurrencyData } from '../middleware/Currency';

export class CurrencyAdapter {
  constructor(
    private readonly data: CurrencyData[],
    private readonly quantity? : number,
  ) {
    this.data = data;
    this.quantity = quantity || 5;
  }

  forRender() {
    return this.data
      .map((item) => ({ text: item.cc, callback_data: item.r030 }))
      .reduce((acc: any, _, i, array) => {
        if (i % this.quantity! === 0) acc.push(array.slice(i, i + this.quantity!));
        return acc;
      }, []);
  }

  makeRegExp() {
    return this.data.map(({ cc }) => `${cc}`).toString().replace(/,/g, '|');
  }
}
