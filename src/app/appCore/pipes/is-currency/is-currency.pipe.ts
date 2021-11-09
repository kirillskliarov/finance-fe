import { Pipe, PipeTransform } from '@angular/core';
import { Security } from '../../entities/Security';

@Pipe({
  name: 'isCurrency'
})
export class IsCurrencyPipe implements PipeTransform {

  transform(value: Security | null): boolean {
    return value?.isCurrency() ?? false;
  }

}
