import { ClassConstructor, plainToClass } from 'class-transformer';
import { map } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';

type ClassOrArray<T, V extends any | any[]> = V extends any[] ? T[] : T;

export function toClass<T, V>(cls: ClassConstructor<T>): OperatorFunction<V, ClassOrArray<T, V>> {
  return map((plain: V): ClassOrArray<T, V> => {
    // @ts-ignore
    return plainToClass<T, V>(cls, plain);
  });
}
