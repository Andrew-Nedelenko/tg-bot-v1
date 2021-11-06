import { CurrencyData } from '../command/Currency';

export const groupBy = (data: CurrencyData[], quantity: number) => data
  .map((item) => ({ text: `${item.CurrencyCodeL} - ${item.Amount}`, callback_data: item.CurrencyCode }))
  .reduce((acc: any, _, i, array) => {
    if (i % quantity === 0) acc.push(array.slice(i, i + quantity));
    return acc;
  }, []);
