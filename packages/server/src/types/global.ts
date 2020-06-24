type Constructor<T = any> = new (...args: any[]) => T;
type AbstractConstructor<T = any> = ((...args: any[]) => T) & { prototype: T };

// https://github.com/angular/angular/blob/master/packages/core/src/interface/type.ts

/**
 * @description
 *
 * Represents a type that a Component or other object is instances of.
 *
 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
 * the `MyCustomComponent` constructor function.
 *
 * @publicApi
 */
export const Type = Function;

export function isType(v: any): v is Type<any> {
  return typeof v === 'function';
}

/**
 * @description
 *
 * Represents an abstract class `T`, if applied to a concrete class it would stop being
 * instantiatable.
 *
 * @publicApi
 */
export interface AbstractType<T> extends Function {
  prototype: T;
}

export type Mutable<T extends { [x: string]: any }, K extends string> = {
  [P in K]: T[P];
};

declare global {
  interface Type<T> extends Function {
    new (...args: any[]): T;
  }

  type MaybePromise<T> = T | Promise<T>;

  type AnyRecord = Record<string, any>;
}
