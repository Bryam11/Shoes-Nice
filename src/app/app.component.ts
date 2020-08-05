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
    this.roueter.navigate(['Home']);
    this.items = [
      {
          label: '🙍🏻‍♂️USUARIOS',
          items: [
              [
                  {
                      items: [{label: '💻Iniciar sesion', routerLink: 'Iniciar-sesion'}]
                  },
                  {
                    items: [{label: '👳🏾‍♂️Registrar usuario', routerLink: 'registrar-Usuario'}]
                  },
                  {
                    items: [{label: '🔙Salir', routerLink: 'Home'}]
                  }
              ],
          ]
      },
      {
          label: '📁CATALOGO',
          items: [
              [
                  {
                    items: [{label: '📰Ver Catalogo', routerLink: 'ver-catalogo'}]
                  },
                  {
                    items: [{label: '👟Registrar Zapatos', routerLink: 'register-shoes'}]
                  },
                  {
                    items: [{label: '🔙Salir', routerLink: 'Home'}]
                  }
              ]
          ]
      },
  ]
}

}
