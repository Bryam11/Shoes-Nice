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
import { UserService } from './Service/Usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoesService } from './Service/Shoes.service';
import { MegaMenuModule } from 'primeng/megamenu';
import {ScrollPanelModule} from 'primeng/scrollpanel';


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
    FormsModule,
    HttpClientModule,
    MegaMenuModule,
    ScrollPanelModule
  ],
  providers: [UserService, ShoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
