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
  public out(...args: Console.T[]): this {
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
  protected abstract log(args: Console.T[]): void;
}
