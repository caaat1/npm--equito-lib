import * as Console from '../Console';
import LocalNews from './Abstract';

export default class Col extends LocalNews {
  protected log(args: Console.T[]): void {
    Console.Log.col(...args);
  }
}
