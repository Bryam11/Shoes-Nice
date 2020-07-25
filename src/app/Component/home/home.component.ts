import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Service/Usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UsuarioInterface: any;

  constructor(private router: Router, private Usuarioservicio: UserService) { }

  ngOnInit(): void {
  this.getUsuarios();
  }
  
iniciarsesioc(){
  this.router.navigate(['Iniciar-sesion']);
}
 getUsuarios(){
  this.Usuarioservicio.getUsuarios().subscribe((data: {})=>{
    console.log(data);
    this.UsuarioInterface= data;
 });

}
}
