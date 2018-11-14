import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatHtml'
})
export class ConcatHtmlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const concatValues = value.join('')
    return concatValues
  }
}
