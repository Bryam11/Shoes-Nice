import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  title = 'consumo';

  items: MegaMenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: '📁MENU',
              items: [
                  [
                      {
                          items: [
                              {label: '👟Registrar Zapatos',routerLink: 'pet'}, 
                              {label: '🔎Buscar Zapatos', routerLink: 'mascota'},
                              {label: '🔙Salir', routerLink: ''}
                            ]
                      },

                  ],

              ]
          },
         
      ];
  }
}