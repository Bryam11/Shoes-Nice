import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // DECLARACIONES DE VARIABLES
  title = 'Shoes-Nice';
  items: MegaMenuItem[];
  constructor( private roueter: Router) {}
  // METODO QUE INICIA CON EL MEGAMENU
  ngOnInit() {
    
    this.items = [
      {
          label: '📁MENU',
          items: [
              [
                  {
                      items: [{label: '💻Iniciar sesion', routerLink: 'Iniciar-sesion'}]
                  },
                  {
                    items: [{label: '👳🏾‍♂️Registrar usuario', routerLink: 'registrar-Usuario'}]
                  },
                  {
                    items: [{label: '📰Ver catalogo', routerLink: 'ver-catalogo'}]
                  },
                  {
                    items: [{label: '🔙Salir', routerLink: 'Home'}]
                  }
              ],
          ]
      },
  ]
}

}
