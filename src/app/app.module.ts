import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';

import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';
import { ButtonModule } from 'primeng/button';
import { RegistrarComponent } from './Component/registrar/registrar.component';
import { CatalogoComponent } from './Component/catalogo/catalogo.component';

import { HttpClientModule } from '@angular/common/http';

import { MegaMenuModule } from 'primeng/megamenu';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { UsuarioControllerService } from './Rest/api/usuarioController.service';
import { ShoesControllerService } from './Rest/api/shoesController.service';
import { RegisterShoesComponent } from './Component/register-shoes/register-shoes.component';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IniciarSesionComponent,
    RegistrarComponent,
    CatalogoComponent,
    RegisterShoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    MegaMenuModule,
    ScrollPanelModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [UsuarioControllerService,ShoesControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
