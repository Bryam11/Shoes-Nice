import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Buffer } from 'buffer';
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
  maxConfidence: any;
  nombreEmocion: any;
  cargando = null;
  bucket        = 'bucket' // the bucketname without s3://
  foto_origen  = 'source.jpg'
  client:any;
  response : any
  

  constructor() { }

  ngOnInit(): void {
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
      Attributes: ['ALL']
    }
    
  }
  public comparar(){
    
  }
}
