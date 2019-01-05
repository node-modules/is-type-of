import is, { boolean, string } from './index';

let test: unknown;
let testNumber: number;

class TestClass {
    method() {
        return 0;
    }
}

if (is.Long(test)) {
    test;
}

if (is.NaN(testNumber)) {
    testNumber;
}

if (is.array<string>(test)) {
    test;
}

if (is.asyncFunction<(param1: string) => Promise<number>>(test)) {
    test('').then(v => v);
}

if (is.boolean(test)) {
    test;
}

if (is.buffer(test)) {
    test;
}

if (is.class<TestClass>(test)) {
    let ins = new test();
    ins;
}

if (is.date(test)) {
    test;
}

if (is.double(test)) {
    test;
}

if (is.duplexStream(test)) {
    test;
}

if (is.error(test)) {
    test;
}

if (is.finite(testNumber)) {
    testNumber;
}

if (is.function<(param: string) => boolean>(test)) {
    let ret = test('');
    ret;
}

if (is.generator(test)) {
    test;
}

if (is.generatorFunction(test)) {
    test;
}

if (is.int(test)) {
    test;
}

if (is.int32(test)) {
    test;
}

if (is.long(test)) {
    test;
}

if (is.null(test)) {
    test;
}

if (is.nullOrUndefined(test)) {
    test;
}

if (is.number(test)) {
    test;
}

if (is.object<{ prop: string}>(test)) {
    test;
}

if (is.primitive(test)) {
    test;
}

if (is.promise<{ prop: string; }>(test)) {
    test.then(v => v.prop);
}

if (is.readableStream(test)) {
    test;
}

if (is.regExp(test)) {
    test;
}

if (is.regexp(test)) {
    test;
}

if (is.stream(test)) {
    test;
}

if (is.string(test)) {
    test;
}

if (is.symbol(test)) {
    test;
}

if (is.undefined(test)) {
    test;
}

if (is.writableStream(test)) {
    test;
}