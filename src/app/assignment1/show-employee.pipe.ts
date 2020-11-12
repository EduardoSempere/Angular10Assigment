import { Pipe, PipeTransform } from '@angular/core';
import { IAssigment1 } from './Iassigment1';

@Pipe({
  name: 'showEmployee'
})
export class ShowEmployeePipe implements PipeTransform {

  transform(value: IAssigment1, ...args: any[]): string {
    
    return value.id + " " + value.name + " " + value.salary + " " + value.department;
  }

}
