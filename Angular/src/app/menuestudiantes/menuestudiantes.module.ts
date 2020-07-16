import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { MenuestudiantesRoutingModule } from './menuestudiantes-routing.module';
import { InsertestudiantesComponent } from './insertestudiantes/insertestudiantes.component';
import { UpdateestudiantesComponent } from './updateestudiantes/updateestudiantes.component';


@NgModule({
  declarations: [InsertestudiantesComponent, UpdateestudiantesComponent],
  imports: [
    CommonModule,
    MenuestudiantesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuestudiantesModule { }
