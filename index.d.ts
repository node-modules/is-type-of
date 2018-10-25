/// <reference types="node" />
import { Stream, Readable, Writable, Duplex } from 'stream';

type nullOrUndefined = null | undefined;

type primitive = string | number | boolean | symbol | undefined | null;

type Fn = {
    (...args: any[]): any;
};

type Class = {
    new (...args: any[]): any;
}

type AsyncFunction<T = any> = {
    (...args: any[]): Promise<T>
}

declare const is: {
    array<T = any>(val: any): val is T[];
    boolean(val: any): val is boolean;
    null(val: any): val is null;
    nullOrUndefined(val: any): val is nullOrUndefined;
    number(val: any): val is number;
    string(val: any): val is string;
    symbol(val: any): val is symbol;
    undefined(val: any): val is undefined;
    regExp(val: any): val is RegExp;
    object(val: any): val is {};
    date(val: any): val is Date;
    error(val: any): val is Error;
    function<T extends Fn = Fn>(val: any): val is T;
    primitive(val: any): val is primitive;
    buffer(val: any): val is Buffer;
    stream(val: any): val is Stream;
    readableStream(val: any): val is Readable;
    writableStream(val: any): val is Writable;
    duplexStream(val: any): val is Duplex;
    class<T extends Class = Class>(val: any): val is T;
    finite: typeof Number.isFinite;
    NaN: typeof Number.isNaN;
    generator(val: any): val is Generator;
    generatorFunction(val: any): val is GeneratorFunction;
    asyncFunction<T extends AsyncFunction = AsyncFunction>(val: any): val is T;
    promise<T = any>(val: any): val is Promise<T>;
    int(val: any): val is number;
    int32(val: any): val is number;
    long(val: any): val is number;
    Long(val: any): val is number;
    double(val: any): val is number;
}

export = is;
