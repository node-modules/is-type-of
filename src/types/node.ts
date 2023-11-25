import { Buffer } from 'node:buffer';
import { Duplex, Readable, Stream, Writable } from 'node:stream';
import { hasOwnPropertyInChain, isInstanceOf } from './util.js';

/**
 * returns true if val is buffer
 */
export function isBuffer(val: unknown): val is Buffer {
  return isInstanceOf(val, Buffer);
}

/**
 * returns true if val is stream
 */
export function isStream(val?: unknown): val is Stream {
  return isInstanceOf(val, Stream);
}

/**
 * returns true if val is readable stream
 */
export function isReadable(val?: unknown): val is Readable {
  return isStream(val) && _isReadable(val);
}

/**
 * returns true if val is write stream
 */
export function isWritable(val?: unknown): val is Writable {
  return isStream(val) && _isWritable(val);
}

/**
 * returns true if val is duplex stream
 */
export function isDuplex(val?: unknown): val is Duplex {
  return isStream(val) && _isReadable(val) && _isWritable(val);
}

function _isReadable(val: object): boolean {
  if (!hasOwnPropertyInChain(val, '_readableState') || !hasOwnPropertyInChain(val, '_read')) return false;
  return typeof val._read === 'function' && typeof val._readableState === 'object';
}

function _isWritable(val: object): boolean {
  if (!hasOwnPropertyInChain(val, '_writableState') || !hasOwnPropertyInChain(val, '_write')) return false;
  return typeof val._write === 'function' && typeof val._writableState === 'object';
}
