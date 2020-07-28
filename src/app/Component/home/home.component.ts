import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UsuarioInterface: any;
  ShoesInterface: any;

  constructor(private router: Router,) { }

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
