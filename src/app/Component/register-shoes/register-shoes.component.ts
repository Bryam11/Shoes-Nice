import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-register-shoes',
  templateUrl: './register-shoes.component.html',
  styleUrls: ['./register-shoes.component.css']
})
export class RegisterShoesComponent implements OnInit {
  cars: SelectItem[];
  selectedCar2: string = 'BMW';
  item: string;

  constructor() {
    this.cars = [
      {label: 'Nike', value: 'NIKE'},
      {label: 'Adiddas', value: 'ADDIDAS'},
      {label: 'Puma', value: 'PUMA'},
      {label: 'Reebok', value: 'REEBOK'},
      {label: 'Vans', value: 'VANS'},
      {label: 'Totto', value: 'TOTTO'},
  ];
   }

  ngOnInit(): void {
  }



}
