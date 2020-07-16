import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuusersComponent } from './menuusers.component';
import { InsertusersComponent } from './insertusers/insertusers.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
InsertusersComponent
const routes: Routes = [
  { path: '', component: MenuusersComponent },
  { path: 'insertuser', component: InsertusersComponent },
  { path: 'updateuser', component: UpdateusersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuusersRoutingModule { }
