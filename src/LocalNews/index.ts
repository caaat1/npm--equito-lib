import CallStackDefinedPopulated from '../Call/Stack/Defined/Populated';
import CallStackTraces from '../Call/Stack/Traces';
import CallTracePattern from '../Call/Trace/Pattern';
import browser from '../Call/Trace/Pattern/Fields/Interface/browser';
import jsGlobal from '../Call/Trace/Pattern/Fields/Interface/jsGlobal';
import node from '../Call/Trace/Pattern/Fields/Interface/node';
import CallTracePrint from '../Call/Trace/Print';
import ClassParent from '../Class/Parent';
import * as Console from '../Console';
import * as ConstString from '../Const/String';

export default abstract class LocalNews extends globalThis.Error {
  public constructor(...args: string[]) {
    super(args.join(ConstString.SPACE));
    this.name =
      args.length === 0
        ? ClassParent.getCompositeConstructorName(this)
        : ConstString.EMPTY;
  }
  public print(...args: Console.T[]): this {
    new Console.GroupCollapsed(this.toString()).log(() => {
      Console.Log.col(
        new CallTracePrint(
          new CallStackTraces(
            new CallStackDefinedPopulated(this.stack)
          ).getMatches(
            new CallTracePattern(jsGlobal),
            new CallTracePattern(browser),
            new CallTracePattern(node)
          )
        ).toString()
      )
        .void(this.out(...args))
        .col(ConstString.HR);
    });
    return this;
  }
  protected abstract out(...args: Console.T[]): void;
}
