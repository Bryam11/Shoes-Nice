import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './Component/registrar/registrar.component';
import { CatalogoComponent } from './Component/catalogo/catalogo.component';
import { RegisterShoesComponent } from './Component/register-shoes/register-shoes.component';


const routes: Routes = [
  {

    path: '',

    component: HomeComponent
  },
  {
    path: 'Iniciar-sesion',
    component: IniciarSesionComponent
  },
  {
    path: 'registrar-Usuario',
    component: RegistrarComponent
  },

  {
    path: 'ver-catalogo',
    component: CatalogoComponent
  },
  {
    path: 'register-shoes',
    component: RegisterShoesComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
