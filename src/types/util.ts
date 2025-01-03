
export type Class = new (...args: any[]) => any;

export function isInstanceOf<T extends Class>(val: unknown, Clazz: T): val is InstanceType<T> {
  return val instanceof Clazz;
}

export function hasOwnProperty<T extends object>(obj: T, prop: PropertyKey): obj is T & Record<typeof prop, unknown> {
  if (Object.hasOwn) {
    // Node.js >= 16
    return Object.hasOwn(obj, prop);
  }
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function hasOwnPropertyInChain<T extends object>(obj: T, prop: PropertyKey): obj is T & Record<typeof prop, unknown> {
  return prop in obj;
}
