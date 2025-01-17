import * as ConstString from '../../Const/String';

export default abstract class Parent {
  public static getConstructor<T extends object>(
    instance: T
  ): new (...args: unknown[]) => T {
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
          return proto.constructor as new (...args: unknown[]) => T;
      }
    }
    throw new Error();
  }
  public static getCompositeConstructorName<T extends object>(
    instance: T
  ): string {
    return (
      Parent.getConstructor(instance).name +
      ConstString.DOT +
      instance.constructor.name
    );
  }
}
class Error extends globalThis.Error {
  public override message = `No parent class found`;
}
