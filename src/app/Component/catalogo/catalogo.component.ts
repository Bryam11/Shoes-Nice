import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, SelectItem } from 'primeng/api';
import { ShoesControllerService, Shoes } from 'src/app/Rest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],

})

export class CatalogoComponent implements OnInit {
  // DECLARACIONES DE VARIABLES
  
  items: MegaMenuItem[];
  shoes = new Array<Shoes>();
  zapatos: SelectItem[];
  selectedshoes: string = 'Ninguna';
  zapa: Shoes[];
  responsiveOptions;
  

  // CONSTRUCTOR
  constructor(private shoesService: ShoesControllerService, private router: Router) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
     
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      
      },
      {
        breakpoint: '560px',
        numVisible: 1,
     
      }
    ];
   
    this.zapatos = [
      { label: 'NIKE', value: 'NIKE' },
      { label: 'ADIDAS', value: 'ADIDAS' },
      { label: 'PUMA', value: 'PUMA' },
      { label: 'REEBOK', value: 'REEBOK' },
      { label: 'VANS', value: 'VANS' },
    ];
  }

// METODO INICIAL
  ngOnInit() {
    this.allShoes();
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
    this.shoesService.getShoesByMarcaUsingGET(this.selectedshoes).subscribe(data => {
      this.shoes = data;
      this.zapa = data;
      console.log(this.shoes);
    });
  }

  //ETODO PARA LLAMAR REGISTRAR SHOES
  ventanaShoes(){
    alert('Primero debe iniciar sesión')
    this.router.navigate(["Iniciar-sesion"])
  }
}