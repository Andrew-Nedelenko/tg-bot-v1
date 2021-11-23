import { curly } from 'node-libcurl';
import { env } from '../util/Env';

export type CurrencyData = {
  StartDate: string;
  TimeSign: string;
  CurrencyCode: string;
  CurrencyCodeL: string;
  Units: number;
  Amount: number;
  txt?: string;
}

export class Currency {
  constructor(private readonly url = `${env('NBU_URL')}/exchange?json`) {
    this.url = url;
  }

  async getCurrencyList() {
    try {
      const { data } = await curly.get<CurrencyData[]>(this.url);
      const dataWithText = await curly.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
      data.sort();
      const newData = dataWithText.data.map((item: any) => ({
        StartDate: item.exchangedate,
        TimeSign: '0000',
        CurrencyCode: item.r030,
        CurrencyCodeL: item.cc,
        Units: 1,
        Amount: item.rate,
        text: item.txt,
      }));
      return newData;
    } catch (e) {
      return [];
    }
  }
}
