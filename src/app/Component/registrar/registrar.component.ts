import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Buffer } from 'buffer';
import { UsuarioControllerService } from '../../Rest/api/usuarioController.service';
import { Usuario } from 'src/app/Rest';
import { Router } from '@angular/router';




@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']

})
export class RegistrarComponent implements OnInit {
  @ViewChild("video") video: ElementRef;
  @ViewChild("canvas") canvas: ElementRef;

  foto: any;
  detector: any;
  image: any;
  
  showImagen = false;
  error = false;
  subiendo = false;
  urlImagen = null;
  imageRegistro: any;
  visibleSidebar3= false;
  x: any;
 

  albumBucketName = 'imagenes-usuarios';

  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'imagenes-usuarios' },
  });
  public usuarios: Usuario = { foto: "", nombre: "", userid: 0 };




  constructor(private serviceUsuarui: UsuarioControllerService, private roueter: Router) {
    this.usuarios = {};
  }

  ngOnInit(): void {

    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:6a1b91eb-c657-452f-8302-dffb3ed59e80',
    });
    this.usuarios = {};

  }

 
  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(screenStream => {
        this.video.nativeElement.srcObject = screenStream;
        this.video.nativeElement.play();
      });
    }
  }

  public capturar() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 600, 440);
    this.foto = this.canvas.nativeElement.toDataURL("image/png");
    this.foto = this.foto.split(",")[1];
    this.image = {
      Image: {
        Bytes: new Buffer(this.foto, 'base64')
      },

    }

  }


  //metodo de validacion para que no se puedan repetir los usuarios


 

  //metodo para registrar en el back-end
  registrarUsuario  = async (event) =>{

 //METODO GUARDAR LA FOTO EN EL BUCKET
 this.imageRegistro = new Buffer(this.foto, 'base64');
 if (this.foto) {
   try {
     this.subiendo = true;

     const data = await new AWS.S3.ManagedUpload({
       params: {
         Bucket: this.albumBucketName,
         Key: this.usuarios.nombre + '.png',
         Body: this.imageRegistro,
         ACL: 'public-read',
       },
     }).promise();
     this.usuarios.foto = data.Location;
     this.subiendo = false;
     this.showImagen = true;
   } catch (error) {
     this.error = true;
     const bucle = setInterval(() => {
       this.error = false;
       clearInterval(bucle);
     }, 2000);
   }
 } else {
   alert('SELECCIONE UN ARCHIVO');
 }

//codigo para postear en el back-end
if(this.usuarios.nombre == null){
alert('Debe llenar el campo nombre de usuario')
}else{
  this.serviceUsuarui.createUserUsingPOST(this.usuarios).subscribe(data => {
    console.log(data);
    
    alert('Se a registrado correctamente');
  }, (err) => {
    console.log(err);
    console.log("los datos estan duplicados");
    alert(`este nombre de ususario ya existe pruebe con ${this.usuarios.nombre}11`);

  });
}
 
  
    
  }

}
