import assert from 'node:assert';
import { EventEmitter } from 'node:events';
import { Duplex, PassThrough, Readable, Stream, Transform, Writable } from 'node:stream';
import util from 'node:util';
import { expectType } from 'ts-expect';
import { isBuffer, isDuplex, isReadable, isStream, isWritable } from '../../src/types/node.js';

describe('test/node.test.ts', () => {
  describe('isBuffer', () => {
    it('should check value', () => {
      assert.strictEqual(isBuffer(Buffer.alloc(0)), true);
      assert.strictEqual(isBuffer(Buffer.from('')), true);

      assert.strictEqual(isBuffer(null), false);
      assert.strictEqual(isBuffer({}), false);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isBuffer(val)) {
        expectType<Buffer>(val);
      }
    });
  });

  describe('isStream', () => {
    it('should check value', () => {
      function FakeStream() {
        // @ts-ignore
        EventEmitter.call(this);
      }
      util.inherits(FakeStream, EventEmitter);
      FakeStream.prototype.pipe = function() {};
      FakeStream.Stream = FakeStream;

      assert.strictEqual(isStream(new Readable()), true);
      assert.strictEqual(isStream(new Writable()), true);
      assert.strictEqual(isStream(new Transform()), true);
      assert.strictEqual(isStream(new Duplex()), true);
      assert.strictEqual(isStream(new PassThrough()), true);
      // @ts-ignore
      assert.strictEqual(isStream(new FakeStream()), false);
      assert.strictEqual(isStream({}), false);
      assert.strictEqual(isStream(), false);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isStream(val)) {
        expectType<Stream>(val);
      }
    });
  });

  describe('isReadable', () => {
    it('should check value', () => {
      assert.strictEqual(isReadable(new Readable()), true);
      assert.strictEqual(isReadable(new Writable()), false);
      assert.strictEqual(isReadable(new Transform()), true);
      assert.strictEqual(isReadable(new Duplex()), true);
      assert.strictEqual(isReadable(new PassThrough()), true);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isReadable(val)) {
        expectType<Stream>(val);
        expectType<Readable>(val);
      }
    });
  });

  describe('isWritable', () => {
    it('should check value', () => {
      assert.strictEqual(isWritable(new Readable()), false);
      assert.strictEqual(isWritable(new Writable()), true);
      assert.strictEqual(isWritable(new Transform()), true);
      assert.strictEqual(isWritable(new Duplex()), true);
      assert.strictEqual(isWritable(new PassThrough()), true);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isWritable(val)) {
        expectType<Stream>(val);
        expectType<Writable>(val);
      }
    });
  });

  describe('isDuplex', () => {
    it('should check value', () => {
      assert.strictEqual(isDuplex(new Readable()), false);
      assert.strictEqual(isDuplex(new Writable()), false);
      assert.strictEqual(isDuplex(new Transform()), true);
      assert.strictEqual(isDuplex(new Duplex()), true);
      assert.strictEqual(isDuplex(new PassThrough()), true);
    });

    it('should check type', () => {
      const val: unknown = '1';
      if (isDuplex(val)) {
        expectType<Stream>(val);
        expectType<Duplex>(val);
      }
    });
  });
});
