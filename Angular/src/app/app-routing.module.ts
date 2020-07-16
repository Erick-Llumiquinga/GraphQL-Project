import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    {path:'',redirectTo: '/login', pathMatch: 'full'},
    {path: 'login',component: LoginComponent},
    {path: 'menu',component: MenuComponent},
    { path: 'menucursos', loadChildren: () => import('./menucursos/menucursos.module').then(m => m.MenucursosModule) },
    { path: 'menuestudiantes', loadChildren: () => import('./menuestudiantes/menuestudiantes.module').then(m => m.MenuestudiantesModule) },
    { path: 'menuusers', loadChildren: () => import('./menuusers/menuusers.module').then(m => m.MenuusersModule) },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule{}