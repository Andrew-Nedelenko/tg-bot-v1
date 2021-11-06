import { Telegraf } from 'telegraf';
import { Currency } from './command/Currency';
import { env } from './util/Env';
import { groupBy } from './util/groupBy';

export const bot = new Telegraf(env('BOT_TOKEN'));

bot.start((ctx) => ctx.reply('Hello I am currency bot. \n /list - list of all currencies'));

bot.command('/list', async (ctx) => {
  const currencyList = await new Currency().getCurrencyList();
  ctx.reply(currencyList.length.toString(), {
    reply_markup: {
      inline_keyboard: groupBy(currencyList, 3),
    },
  });
});
