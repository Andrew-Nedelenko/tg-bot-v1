import { Telegraf } from 'telegraf';
import { env } from './util/Env';

export const bot = new Telegraf(env('BOT_TOKEN'));

bot.start((ctx) => ctx.reply('Hello I am bot. Welcome home'));
