import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuusersRoutingModule } from './menuusers-routing.module';
import { InsertusersComponent } from './insertusers/insertusers.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';


@NgModule({
  declarations: [InsertusersComponent, UpdateusersComponent],
  imports: [
    CommonModule,
    MenuusersRoutingModule
  ]
})
export class MenuusersModule { }
