export default abstract class Parent {
    static getConstructor<T extends object>(instance: T): Function;
    static getCompositeConstructorName<T extends object>(instance: T): string;
}
