import { isNumber } from './primitive';
import { isObject } from './std';
import { hasOwnProperty } from './util';

interface LongObject {
  high: number;
  low: number;
}

/**
 * returns true if val is LongObject
 *
 * LongObject is from npm package `long`
 */
export function isLongObject(obj?: unknown): obj is LongObject {
  if (!isObject(obj)) return false;
  if (!hasOwnProperty(obj, 'high') || !hasOwnProperty(obj, 'low')) return false;
  return isNumber(obj.high) && isNumber(obj!.low);
}
