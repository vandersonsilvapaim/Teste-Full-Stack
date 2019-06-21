// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipeComponent } from './date-pipe.component';
import { JsonPipeComponent } from './json-pipe.component';

@NgModule({
  declarations: [
    DatePipeComponent,
    JsonPipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatePipeComponent,
    JsonPipeComponent
  ]
})
export class PipesModule {
}
