import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductList'
})
export class FilterProductListPipe implements PipeTransform {

  transform(value: any, args: string): any {


    return value.filter(p => p.productName.toLowerCase().includes(args.toLowerCase()));
  }

}
