import { curly } from 'node-libcurl';
import { env } from '../util/Env';

export type CurrencyData = {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

export class Currency {
  constructor(private readonly url = `${env('NBU_URL')}/exchange?json`) {
    this.url = url;
  }

  async getCurrencyList() {
    try {
      const { data } = await curly.get<CurrencyData[]>(this.url);
      return data;
    } catch (e) {
      return [];
    }
  }
}
