import {promises as fs} from 'fs';
import CallStackDefinedPopulated from '../../Call/Stack/Defined/Populated';
import CallStackTraces from '../../Call/Stack/Traces';
import CallTracePattern from '../../Call/Trace/Pattern';
import browser from '../../Call/Trace/Pattern/Fields/Interface/browser';
import jsGlobal from '../../Call/Trace/Pattern/Fields/Interface/jsGlobal';
import node from '../../Call/Trace/Pattern/Fields/Interface/node';
import CallTracePrint from '../../Call/Trace/Print';
import ClassParent from '../../Class/Parent';
import * as Console from '../../Console';
import * as ConstString from '../../Const/String';

export default abstract class LocalNews extends globalThis.Error {
  public constructor(...args: string[]) {
    super(args.join(ConstString.SPACE));
    this.name =
      args.length === 0
        ? ClassParent.getCompositeConstructorName(this) + ConstString.SPACE
        : ConstString.EMPTY;
  }
  public async out(...args: Console.T[]): Promise<this> {
    const timestamps = await this.getFileTimestamps();
    this.name += timestamps;
    new Console.GroupCollapsed(this.toString()).log(() => {
      Console.Log.col(
        new CallTracePrint(
          new CallStackTraces(
            new CallStackDefinedPopulated(this.stack)
          ).getMatches(CallTracePattern.new(jsGlobal, browser, node))
        ).toString()
      )
        .void(this.log(args))
        .col(ConstString.HR);
    });
    return this;
  }
  private async getFileTimestamps(): Promise<string> {
    try {
      const stats = await fs.stat(__filename);
      // return stats.birthtime.toString();
      return stats.mtime.toString();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return `Error accessing file statistics: ${error.toString()}`;
      }
      throw new Error('An unexpected error occurred');
    }
  }
  protected abstract log(args: Console.T[]): void;
}
