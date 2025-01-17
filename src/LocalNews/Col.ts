import LocalNews from '.';
import * as Console from '../Console';

export default class Col extends LocalNews {
  protected log(args: Console.T[]): void {
    Console.Log.col(...args);
  }
}
