import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuestudiantesComponent } from './menuestudiantes.component';
import { InsertestudiantesComponent } from './insertestudiantes/insertestudiantes.component';
import { UpdateestudiantesComponent } from './updateestudiantes/updateestudiantes.component';

const routes: Routes = [
  { path: '', component: MenuestudiantesComponent },
  { path: 'insertestudiante', component: InsertestudiantesComponent },
  { path: 'updatestudiante', component: UpdateestudiantesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuestudiantesRoutingModule { }
