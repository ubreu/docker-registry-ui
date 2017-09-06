import { PipeTransform, Pipe } from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({ name: 'name' })
export class NamePipe implements PipeTransform {
  transform(value, args: string[]): any {
    return value.filter(r => {
      return r.name.includes(args || '');
    });
  }
}
