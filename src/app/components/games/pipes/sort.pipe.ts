import { Pipe, PipeTransform } from '@angular/core';
import { SortConfig } from '../interfaces/sort-config';
import { Game } from '../interfaces/game';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: Game[], config: SortConfig): any {
    if (!config?.property.length || !config?.dir) {
      return value;
    }

    return value.sort((current: Game, next: Game) => {
      if (current?.[config.property] < next?.[config.property]) {
        return config.dir === 'asc' ? -1 : 1;
      }

      if (current?.[config.property] > next?.[config.property]) {
        return config.dir === 'asc' ? 1 : -1;
      }

      return 0;
    });
  }
}
