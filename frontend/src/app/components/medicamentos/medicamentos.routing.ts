import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosComponent } from './medicamentos.component';

const M_ROUTES: Routes = [
  { path: 'medicamentos', component: MedicamentosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(M_ROUTES)],
  exports: [RouterModule]
})

export class MedicamentosRoutingModule {

}
