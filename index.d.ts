/// <reference types="node" />
import { Stream, Readable, Writable, Duplex } from 'stream';

type nullOrUndefined = null | undefined;

type primitive = string | number | boolean | symbol | undefined | null;

type Fn = {
    (...args: any[]): any;
};

type Class<T> = {
    new (...args: any[]): T;
}

type AsyncFunction<T = any> = {
    (...args: any[]): Promise<T>
}

type PlainObject = {
    [key: string]: any;
}

declare function isArray<T = any>(val: any): val is T[];
export { isArray as array };
    
export function boolean(val: any): val is boolean;

declare function isNull(val: any): val is null;
export { isNull as null };
    
export function nullOrUndefined(val: any): val is nullOrUndefined;

export function number(val: any): val is number;

export function string(val: any): val is string;

export function symbol(val: any): val is symbol;

export function undefined(val: any): val is undefined;

export function regexp(val: any): val is RegExp;
export function regExp(val: any): val is RegExp;

export function object<T extends PlainObject = PlainObject>(val: any): val is T;

export function date(val: any): val is Date;

export function error(val: any): val is Error;

declare function isFunction<T extends Fn = Fn>(val: any): val is T;
export { isFunction as function };
    
export function primitive(val: any): val is primitive;

export function buffer(val: any): val is Buffer;

export function stream(val: any): val is Stream;

export function readableStream(val: any): val is Readable;

export function writableStream(val: any): val is Writable;

export function duplexStream(val: any): val is Duplex;

declare function isClass<T = any>(val: any): val is Class<T>;
export { isClass as class };

export function generator(val: any): val is Generator;

export function generatorFunction<T extends GeneratorFunction = GeneratorFunction>(val: any): val is T;

export function asyncFunction<T extends AsyncFunction = AsyncFunction>(val: any): val is T;

export function promise<T = any>(val: any): val is Promise<T>;

export function int(val: any): val is number;

export function int32(val: any): val is number;

export function long(val: any): val is number;

export function Long(val: any): val is number;

export function double(val: any): val is number;

export let finite: typeof Number.isFinite;

declare let isNaN: typeof Number.isNaN;
export { isNaN as NaN }
