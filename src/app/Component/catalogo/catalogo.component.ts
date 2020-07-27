import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  styles: [`
        .custombar1 .ui-scrollpanel-wrapper {
            border-right: 9px solid #f4f4f4;
        }
            
        .custombar1 .ui-scrollpanel-bar {
            background-color: #1976d2;
            opacity: 1;
            transition: background-color .3s;
        }
            
        .custombar1 .ui-scrollpanel-bar:hover {
            background-color: #135ba1;
        }
            
        .custombar2 .ui-scrollpanel-wrapper {
            border-right: 9px solid #757575;
            border-bottom: 9px solid #757575;
        }
            
        .custombar2 .ui-scrollpanel-bar {
            background-color: #68C77D;
            border-radius: 0;
            opacity: 1;
            transition: background-color .3s;
        }
            
        .custombar2:hover .ui-scrollpanel-bar {
            background-color: #46A55A;
        }
    `],
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