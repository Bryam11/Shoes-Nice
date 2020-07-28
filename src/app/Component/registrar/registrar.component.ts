import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Buffer } from 'buffer';



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
  maxConfidence: any;
  nombreEmocion: any;
  cargando = null;
  bucket = 'bucket' // the bucketname without s3://
  foto_origen = 'source.jpg'
  client: any;
  response: any
  nombre: string;
  showImagen = false;
  error = false;
  subiendo = false;
  urlImagen = null;
  imageRegistro: any;

  albumBucketName = 'imagenes-usuarios';

  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'imagenes-usuarios' },
  });
// public usuarios: UsuarioInterface={foto:"",nombre: "",userid: 0}



  constructor() { }

  ngOnInit(): void {

    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:6a1b91eb-c657-452f-8302-dffb3ed59e80',
    });
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
    this.cargando = true;
    this.nombreEmocion = null;
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 600, 440);
    this.foto = this.canvas.nativeElement.toDataURL("image/png");
    this.foto = this.foto.split(",")[1];
   this.image = {
      Image: {
        Bytes: new Buffer(this.foto, 'base64')
      },

    }
   
  }

  onClickSubir = async (event) => {

    this.imageRegistro = new Buffer(this.foto, 'base64');
    if (this.foto) {
      try {
        console.log(this.foto);
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketName,
            Key: this.usuarios.nombre + '.png',
            Body: this.imageRegistro,
            ACL: 'public-read',
          },
        }).promise();
        alert('se ha guardado la imagen correctamente');
  
        this.usuarios.foto = data.Location;
        this.subiendo = false;
        this.showImagen  = true;
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
   
    this.guardarUsuario();

  }

  guardarUsuario(){
 // this.servicioUsuarios.guardarUsuario(this.usuarios).subscribe(data =>{console.log(data)});  
  //alert('Se a registrado correctamente'); 
}
  
}
