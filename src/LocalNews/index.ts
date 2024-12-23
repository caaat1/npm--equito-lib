import CallStackDefinedPopulated from '../Call/Stack/Defined/Populated';
import CallStackTraces from '../Call/Stack/Traces';
import * as CallTrace from '../Call/Trace';
import ClassParent from '../Class/Parent';
import * as Console from '../Console';
import * as ConstStr from '../Const/String';
export default abstract class LocalNews extends globalThis.Error {
    public constructor(...args: string[]) {
        super(args.join(ConstStr.SPACE));
        this.name =
            args.length === 0
                ? ClassParent.getCompositeConstructorName(this)
                : ConstStr.EMPTY;
    }
    public print(...args: Console.T[]): this {
        new Console.GroupCollapsed(this.toString()).log(() => {
            Console.Log.col(
                new CallTrace.Print(
                    new CallStackTraces(
                        new CallStackDefinedPopulated(this.stack),
                    ).getMatches(
                        new CallTrace.Pattern(CallTrace.browser),
                        new CallTrace.Pattern(CallTrace.node),
                    ),
                ).toString(),
            )
                .void(this.out(...args))
                .col(ConstStr.HR);
        });
        return this;
    }
    protected abstract out(...args: Console.T[]): void;
}
