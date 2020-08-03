import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api/megamenuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shoes-Nice';
  items: MegaMenuItem[];
  ngOnInit() {
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
