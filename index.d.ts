export function array(val: any): boolean;
export function boolean(val: any): boolean;

declare function isNull(val: any): boolean;
export { isNull as null };

export function nullOrUndefined(val: any): boolean;

export function number(val: any): boolean;

export function string(val: any): boolean;

export function symbol(val: any): boolean;

export function undefined(val: any): boolean;

export function regexp(val: any): boolean;
export function regExp(val: any): boolean;

export function object(val: any): boolean;

export function date(val: any): val is Date;

export function error(val: any): val is Error;

declare function isFunction(val: any): boolean;
export { isFunction as function };
    
export function primitive(val: any): boolean;

export function buffer(val: any): boolean;

export function stream(val: any): boolean;

export function readableStream(val: any): boolean;

export function writableStream(val: any): boolean;

export function duplexStream(val: any): boolean;

declare function isClass(val: any): boolean;
export { isClass as class };

export function generator(val: any): boolean;

export function generatorFunction(val: any): boolean;

export function asyncFunction(val: any): boolean;

export function promise(val: any): boolean;

export function int(val: any): boolean;

export function int32(val: any): boolean;

export function long(val: any): boolean;

export function Long(val: any): boolean;

export function double(val: any): boolean;
export function finite(val: any): boolean;
export function NaN(val: any): boolean;

export function bigInt(val: any): boolean;
export function bigint(val: any): boolean;
