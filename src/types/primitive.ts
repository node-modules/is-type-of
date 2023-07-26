// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

type Primitive = string | number | bigint | boolean | symbol | null | undefined;
type Nullable = null | undefined;

export function isString(val?: unknown): val is string {
  return typeof val === 'string';
}

export function isNumber(val?: unknown): val is number {
  return typeof val === 'number';
}

export function isBigInt(val?: unknown): val is bigint {
  return typeof val === 'bigint';
}

export function isBoolean(val?: unknown): val is boolean {
  return typeof val === 'boolean';
}

export function isSymbol(val?: unknown): val is symbol {
  return typeof val === 'symbol';
}

export function isUndefined(val?: unknown): val is undefined {
  return typeof val === 'undefined';
}

export function isNull(val?: unknown): val is null {
  return val === null;
}

export function isNullable(val?: unknown): val is Nullable {
  return val == null;
}

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
export function isInteger(val?: unknown): val is number {
  if (isNullable(val)) return false;
  return Number.isInteger(val);
}

const MAX_INT_31 = Math.pow(2, 31);
export function isInteger32(val?: unknown): val is number {
  if (isNullable(val)) return false;
  return isInteger(val) && val >= -MAX_INT_31 && val <= MAX_INT_31 - 1;
}

export function isNaN(val?: unknown): val is number {
  return Number.isNaN(val);
}

export function isFinite(val?: unknown): val is number {
  return Number.isFinite(val);
}

export function isLong(val?: unknown): val is number {
  if (isNullable(val)) return false;
  return isInteger(val) && (val < -MAX_INT_31 || val > MAX_INT_31 - 1);
}

export function isDouble(val?: unknown): val is number {
  if (isNullable(val)) return false;
  return isNumber(val)
    && !isNaN(val)
    && val % 1 !== 0;
}

export function isSafeInteger(val?: unknown): val is number {
  return Number.isSafeInteger(val);
}
