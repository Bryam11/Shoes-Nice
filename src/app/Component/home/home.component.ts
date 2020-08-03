import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoesControllerService, Shoes } from 'src/app/Rest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UsuarioInterface: any;
  ShoesInterface: any;
  Shoes = new Array<Shoes>();
  



  constructor(private router: Router, private shoesService: ShoesControllerService) {}



  ngOnInit(): void {
  this.getshoes();
  }
  
iniciarsesioc(){
  this.router.navigate(['Iniciar-sesion']);
}
 getshoes(){

  this.shoesService.getallShoesUsingGET().subscribe(
    data => {
      this.Shoes = data;
      
      console.log(data);
      });

}

}
