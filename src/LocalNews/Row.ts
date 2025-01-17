import * as Console from '../Console';
import LocalNews from './Abstract';

export default class Row extends LocalNews {
  protected log(args: Console.T[]): void {
    Console.Log.row(...args);
  }
}
