import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompleto',
  pure:false
})
export class FiltroCompletoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista []
  {
    return listas.filter( listas =>listas.terminada === completada);
  }

}
