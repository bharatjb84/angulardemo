import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initPipe'
})
export class InitPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
