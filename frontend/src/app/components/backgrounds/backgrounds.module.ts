// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BackgroundSlantComponent } from './background-slant/background-slant.component';
import { BackgroundEmptyComponent } from './background-empty/background-empty.component';

@NgModule({
  declarations: [
    BackgroundSlantComponent,
    BackgroundEmptyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundSlantComponent,
    BackgroundEmptyComponent
  ]
})
export class BackgroundsModule {
}
