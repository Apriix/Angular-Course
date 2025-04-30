import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipePipe } from './components/pipe/pipe.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PipesRoutingModule, PipePipe, PipesComponent],
})
export class PipesModule {}
