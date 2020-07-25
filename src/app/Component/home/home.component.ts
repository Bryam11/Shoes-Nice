import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Service/Usuario.service';
import { ShoesService } from '../../Service/Shoes.service';
import { ShoesInterface } from '../../Model/Shoes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UsuarioInterface: any;
  ShoesInterface: any;

  constructor(private router: Router, private Usuarioservicio: UserService, private Shoesservice: ShoesService) { }

  ngOnInit(): void {
  this.getUsuarios();
  this.getshoes();
  }
  
iniciarsesioc(){
  this.router.navigate(['Iniciar-sesion']);
}
 getshoes(){
  this.Shoesservice.getShoes().subscribe((data: {})=>{
    console.log(data);
    this.ShoesInterface= data;
 });

}

getUsuarios(){
  this.Usuarioservicio.getUsuarios().subscribe((data: {})=>{
    console.log(data);
    this.UsuarioInterface= data;
 });

}
}
