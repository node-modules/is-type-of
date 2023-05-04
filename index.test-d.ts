import { expectType } from 'tsd';
import is from '.';

expectType<boolean>(is.Long(1));
expectType<boolean>(is.NaN(Number.NaN));
expectType<boolean>(is.null(1));
expectType<boolean>(is.nullOrUndefined(1));
expectType<boolean>(is.bigInt(1));
expectType<boolean>(is.bigint(1));
