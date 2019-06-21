import { NgModule, CUSTOM_ELEMENTS_SCHEMA, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule,
  MatSlideToggleModule, MatStepperModule, MatTooltipModule, MatSidenavModule,
  MatTableModule, MatCardModule, MatDatepickerModule, MatExpansionModule,
  MatIconModule, MatToolbarModule, MAT_DIALOG_DATA
} from '@angular/material';

// import { CdkTableModule } from '@angular/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';

// import { MedicamentosRoutingModule } from './medicamentos.routing';

import { MedicamentosComponent } from './medicamentos.component';
import { DialogMedicamentoComponent } from './dialog/dialog-medicamento.component';

@NgModule({
  declarations: [
    MedicamentosComponent,
    DialogMedicamentoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule,
    MatSlideToggleModule, MatStepperModule, MatTooltipModule, MatSidenavModule,
    MatTableModule, MatCardModule, MatDatepickerModule, MatExpansionModule,
    MatIconModule, MatToolbarModule,
    FormsModule, ReactiveFormsModule,
    PipesModule,
    // MedicamentosRoutingModule
  ],
  exports: [
    MedicamentosComponent,
    DialogMedicamentoComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [DialogMedicamentoComponent],
  providers: [{
    provide: MAT_DIALOG_DATA,
    useValue: {}
  }]
})

export class MedicamentosModule {
}
