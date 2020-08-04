import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, SelectItem } from 'primeng/api';
import { ShoesControllerService, Shoes } from 'src/app/Rest';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],

})

export class CatalogoComponent implements OnInit {
  // DECLARACIONES DE VARIABLES
  inicio: String = '';
  marca: string;
  items: MegaMenuItem[];
  shoes = new Array<Shoes>();
  cars: SelectItem[];
  selectedCar: string = 'Ninguna';
  zapa: Shoes[];
  responsiveOptions;
  title = 'consumo';

  // CONSTRUCTOR
  constructor(private shoesService: ShoesControllerService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
   
    this.cars = [
      { label: 'NIKE', value: 'NIKE' },
      { label: 'ADIDAS', value: 'ADIDAS' },
      { label: 'PUMA', value: 'PUMA' },
      { label: 'REEBOK', value: 'REEBOK' },
      { label: 'VANS', value: 'VANS' },
    ];
  }

// METODO INICIAL
  ngOnInit() {
    this.allShoes()
  }

  // METODO PARA LLAMAR LA LISTA DE ZAPATOS CON SUS ATRIBUTOS
  allShoes() {
    this.shoesService.getallShoesUsingGET().subscribe(data => {
      this.shoes = data;
      this.zapa = data;
      console.log(this.zapa);
      
    });
  }

// METODO PARA BUSCAR ZAPATO POR MARCA
  buscarPorMarca() {
    this.shoesService.getShoesByMarcaUsingGET(this.selectedCar).subscribe(data => {
      this.shoes = data;
      this.zapa = data;
      console.log(this.shoes);
    });
  }
}