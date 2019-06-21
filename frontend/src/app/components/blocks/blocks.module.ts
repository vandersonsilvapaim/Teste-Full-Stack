// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

// Components
import { CardBlockComponent } from './card-block/card-block.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { ThirdBlockComponent } from './third-block/third-block.component';

@NgModule({
  declarations: [
    CardBlockComponent,
    FirstBlockComponent,
    ThirdBlockComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule
  ],
  exports: [
    CardBlockComponent,
    FirstBlockComponent,
    ThirdBlockComponent
  ]
})
export class BlocksModule {
}
