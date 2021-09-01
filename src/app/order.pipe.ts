import { Pipe, PipeTransform } from '@angular/core';
import { Aniversariante } from './shared/model/aniversariante';
import sortBy from 'sort-by';


@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(list: Aniversariante[], params?: number): Aniversariante[] {

    //if(params.length){
     return list.sort(sortBy(params));
   // }
   // return null;
  }

}
