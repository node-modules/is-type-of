// Javascript Primitive
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

type Primitive = string | number | bigint | boolean | symbol | null | undefined;
type Nullable = null | undefined;

const MAX_INT_31 = Math.pow(2, 31);

/**
 * returns true if val is string, not `String` object
 */
export function isString(val?: unknown): val is string {
  return typeof val === 'string';
}

/**
 * returns true if val is number, not `Number` object
 */
export function isNumber(val?: unknown): val is number {
  return typeof val === 'number';
}

/**
 * returns true if val is boolean, not `Boolean` object
 */
export function isBoolean(val?: unknown): val is boolean {
  return typeof val === 'boolean';
}

/**
 * returns true if val is bigint
 */
export function isBigInt(val?: unknown): val is bigint {
  return typeof val === 'bigint';
}

/**
 * returns true if val is symbol
 */
export function isSymbol(val?: unknown): val is symbol {
  return typeof val === 'symbol';
}

/**
 * returns true if val is undefined
 */
export function isUndefined(val?: unknown): val is undefined {
  return typeof val === 'undefined';
}

/**
 * returns true if val is null
 */
export function isNull(val?: unknown): val is null {
  return val === null;
}

/**
 * returns true if val is null or undefined
 */
export function isNullable(val?: unknown): val is Nullable {
  return val == null;
}

/**
 * returns true if val is primitive
 */
export function isPrimitive(val?: unknown): val is Primitive {
  return val === null ||
    typeof val === 'boolean' ||
    typeof val === 'number' ||
    typeof val === 'string' ||
    typeof val === 'symbol' ||
    typeof val === 'bigint' ||
    typeof val === 'undefined';
}

// Number Extension

/**
 * returns true if val is integer
 */
export function isInteger(val?: unknown): val is number {
  if (isNullable(val)) return false;
  return Number.isInteger(val);
}

/**
 * returns true if val is integer, and between -2 ** 31 and 2 ** 31 - 1
 */
export function isInteger32(val?: unknown): val is number {
  if (!isInteger(val)) return false;
  return val >= -MAX_INT_31 && val <= MAX_INT_31 - 1;
}

/**
 * returns true if val is integer, and < -2 ** 31, and > 2 ** 31 - 1
 */
export function isLong(val?: unknown): val is number {
  if (!isInteger(val)) return false;
  return val < -MAX_INT_31 || val > MAX_INT_31 - 1;
}

/**
 * returns true if val is integer, and between -(2 ** 53 - 1) and 2 ** 53 - 1
 * @see {Number.isSafeInteger}
 */
export function isSafeInteger(val?: unknown): val is number {
  return Number.isSafeInteger(val);
}

/**
 * returns true if val is Double
 */
export function isDouble(val?: unknown): val is number {
  if (isNullable(val)) return false;
  return isNumber(val)
    && !isNaN(val)
    && val % 1 !== 0;
}

/**
 * returns true if val is NaN
 * @see {Number.isNaN}
 */
export function isNaN(val?: unknown): boolean {
  return Number.isNaN(val);
}

/**
 * returns true if val is finite
 * @see {Number.isFinite}
 */
export function isFinite(val?: unknown): val is number {
  return Number.isFinite(val);
}
