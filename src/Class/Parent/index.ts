import * as ConstString from '../../Const/String';
export default abstract class Parent {
    public static getConstructor<T extends object>(instance: T): Function {
        loop: for (
            let proto: T;
            (proto = Object.getPrototypeOf(instance));
            instance = proto
        ) {
            switch (proto.constructor) {
                case Object:
                    break loop;
                case instance.constructor:
                    continue;
                default:
                    return proto.constructor;
            }
        }
        throw new Error();
    }
    public static getCompositeConstructorName<T extends object>(
        instance: T,
    ): string {
        return (
            Parent.getConstructor(instance).name +
            ConstString.DOT +
            instance.constructor.name
        );
    }
}
class Error extends globalThis.Error {
    public message = `No parent class found`;
}
