import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule ,Apollo} from 'apollo-angular';//apollo
import { HttpLinkModule,HttpLink } from 'apollo-angular-link-http'//apollo
import { AppComponent } from './app.component';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {appRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenucursosComponent } from './menucursos/menucursos.component';
import { MenuestudiantesComponent } from './menuestudiantes/menuestudiantes.component';
import { MenuusersComponent } from './menuusers/menuusers.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MenucursosComponent,
    MenuestudiantesComponent,
    MenuusersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    apollo:Apollo,
    httpLink:HttpLink
  ){
    apollo.create({
      link:httpLink.create({uri:'http://localhost:3500/gql/'}),//url Servidor
      cache:new InMemoryCache()
    })
  }
}
