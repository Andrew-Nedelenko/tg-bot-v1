import { Currency } from '../middleware/Currency';
import { CurrencyAdapter } from '../util/CurrencyAdapter';

export const listCurrency = async (ctx: any) => {
  const currencyList = await new Currency().getCurrencyList();
  ctx.reply(currencyList.length.toString(), {
    reply_markup: {
      keyboard: new CurrencyAdapter(currencyList).forRender(),
    },
  });
};
