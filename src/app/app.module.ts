import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';

import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';
import { ButtonModule } from 'primeng/button';
import { RegistrarComponent } from './Component/registrar/registrar.component';
import { CatalogoComponent } from './Component/catalogo/catalogo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IniciarSesionComponent,
    RegistrarComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
