import LocalNews from '.';
import * as Console from '../Console';

export default class Row extends LocalNews {
  protected out(...args: Console.T[]): void {
    Console.Log.row(...args);
  }
}
