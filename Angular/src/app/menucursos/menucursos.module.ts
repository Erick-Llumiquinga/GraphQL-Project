import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { MenucursosRoutingModule } from './menucursos-routing.module';
import { InsertcursosComponent } from './insertcursos/insertcursos.component';
import { UpdatecursosComponent } from './updatecursos/updatecursos.component';

@NgModule({
  declarations: [ InsertcursosComponent, UpdatecursosComponent],
  imports: [
    CommonModule,
    MenucursosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenucursosModule { }
