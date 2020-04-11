import { NgModule } from '@angular/core';
import { FiltroCompletoPipe } from './filtro-completo.pipe';




@NgModule({
  declarations: [FiltroCompletoPipe],
  exports:[FiltroCompletoPipe]
})
export class PipesModule { }
