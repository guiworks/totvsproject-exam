import { Pipe, PipeTransform } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { Hotel } from './hotel';

@Pipe({
  name: 'hotelFilter'
})

export class FilterPipe implements PipeTransform {


  transform(hoteis: Hotel[], searchTerm: string): any {
    if(!hoteis || !searchTerm){
      //hoteis.length = 0;
      return hoteis;
    }
    
    return hoteis.filter(hoteis => 
      hoteis.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }
}