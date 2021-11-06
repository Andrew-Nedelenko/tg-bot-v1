import { Telegraf } from 'telegraf';
import { Currency } from './command/Currency';
import { env } from './util/Env';

export const bot = new Telegraf(env('BOT_TOKEN'));

bot.start((ctx) => ctx.reply('Hello I am bot. Welcome home'));

bot.command('/list', async (ctx) => {
  const currencyList = await new Currency().getCurrencyList();
  ctx.reply(currencyList.length.toString());
});
