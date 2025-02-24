import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../../interfaces/products/iproducts';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(prodList:IProducts[], search:string): IProducts[] {
    return prodList.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  }

}
