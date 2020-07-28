import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoesControllerService } from 'src/app/Rest';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UsuarioInterface: any;
  ShoesInterface: any;

  constructor(private router: Router, private shoesService: ShoesControllerService) { }

  ngOnInit(): void {
  this.getUsuarios();
  this.getshoes();
  }
  
iniciarsesioc(){
  this.router.navigate(['Iniciar-sesion']);
}
 getshoes(){

}

getUsuarios(){
  

}
}
