import { Pipe, PipeTransform } from '@angular/core';
import { FilterConfig } from '../interfaces/filter-config';
import { Game } from '../interfaces/game';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(value: Game[] | null, filterConfig: FilterConfig): Game[] {
    if (value) {
      return value.filter((data: Game) => {
        if (filterConfig.name?.length && !data.name.toLowerCase().includes(filterConfig.name.toLowerCase())) {
          return false;
        }
    
        if (filterConfig?.score && !(data.rating >= filterConfig.score)) {
          return false;
        }
    
        return true;
      });
    }
    return [];
  }
}
