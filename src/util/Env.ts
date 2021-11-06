import dotenv from 'dotenv';
import { join } from 'path';

class Env {
  private readonly root = join.bind(this, __dirname, '../../')

  private readonly process = process.env

  private readonly nodeEnv = 'NODE_ENV'

  constructor() {
    dotenv.config({ path: this.root(this.process[this.nodeEnv] === 'production' ? '.env.prod' : '.env.dev') });
  }

  getEnv(en: string): string {
    if (typeof this.process[en] === 'undefined') {
      throw new Error(`${en} variable is undefined`);
    }
    return this.process[en] as string;
  }
}

export const env = (variable: string): string => new Env().getEnv(variable);
