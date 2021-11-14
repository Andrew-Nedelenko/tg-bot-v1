import { Currency } from '../middleware/Currency';
import { CurrencyAdapter } from '../util/CurrencyAdapter';

export const listCurrency = async (ctx: any) => {
  const currencyList = await new Currency().getCurrencyList();
  ctx.reply(`Count of available currencies ${currencyList.length}`, {
    reply_markup: {
      keyboard: new CurrencyAdapter(currencyList).forRender(),
    },
  });
};
