import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Buffer } from 'buffer';
import { Router, RouterModule } from '@angular/router';
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  @ViewChild("video") video: ElementRef;
  @ViewChild("canvas") canvas: ElementRef;

  foto: any;
  detector: any;
  image: any;
  nombre: string;


  constructor(private router: Router) {
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:6a1b91eb-c657-452f-8302-dffb3ed59e80',
    });
  }

  ngOnInit(): void {
  }
  
  // metodo para hacer uso de la camara web
  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(screenStream => {
        this.video.nativeElement.srcObject = screenStream;
        this.video.nativeElement.play();
      });
    }
  }

  //metodo para capturar la imagen
  public capturar() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 600, 440);
    this.foto = this.canvas.nativeElement.toDataURL("image/png");
    this.foto = this.foto.split(",")[1];
    this.image = {
      Image: {
        Bytes: new Buffer(this.foto, 'base64')
      },
      Attributes: ['ALL']
    }

  }


// metodo que compara la similitud
  public comparar() {
    var params = {
      TargetImage: {
        S3Object: {
          Bucket: "imagenes-usuarios",
          Name: this.nombre + '.png'
        }

      },
      SourceImage: {
        Bytes: new Buffer(this.foto, 'base64')
      },
      SimilarityThreshold: 0
    };
    console.log(this.image);

    this.detector = new AWS.Rekognition();

    this.detector.compareFaces(params, function (error, response) {

      if (error) {
        console.log(error);
        console.log(params);
    
alert("Revise bien su nombre de usuario o su foto, si no esta registrado, registrese en el apartado de menú")
      } else {
        console.log(params);

        response.FaceMatches.forEach(data => {
          console.log(data);

          let position = data.Face.BoundingBox
          let similarity = data.Similarity
          let conficencial = data.Confidence
          if (similarity > 95) {
            alert(`Puede iniciar sesión ${similarity}% parecido` );
            window.open('register-shoes','_self', 'width=620,height=1000')
          } else {
            alert(`No puede iniciar sesión, revise sus credenciales`);
          }
        });
      }

    });

  }
}
