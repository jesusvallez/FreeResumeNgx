import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'concatHtml'
})
export class ConcatHtmlPipe implements PipeTransform {
  transform(value: string[]): any {
    return value.join('')
  }
}
