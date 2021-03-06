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
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { SplitButtonModule} from 'primeng/splitbutton';
import { MegaMenuModule } from 'primeng/megamenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { UsuarioControllerService } from './Rest/api/usuarioController.service';
import { ShoesControllerService } from './Rest/api/shoesController.service';
import { RegisterShoesComponent } from './Component/register-shoes/register-shoes.component';

import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import {TooltipModule} from 'primeng/tooltip';
import {GalleriaModule} from 'primeng/galleria';
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import {BlockUIModule} from 'primeng/blockui';
import {PanelModule} from 'primeng/panel';



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
    ListboxModule,
    TableModule,
    CarouselModule,
    DropdownModule,
    BrowserAnimationsModule,
    FileUploadModule,
    TooltipModule,
    GalleriaModule,
    CardModule,
    SplitButtonModule,
    ProgressSpinnerModule,
    SidebarModule,
    SplitButtonModule,
    BlockUIModule,
    PanelModule


  ],
  providers: [UsuarioControllerService, ShoesControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
