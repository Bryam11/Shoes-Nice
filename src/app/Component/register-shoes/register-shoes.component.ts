import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import * as AWS from 'aws-sdk';
import { Shoes } from '../../Rest/model/shoes';
import { ShoesControllerService } from '../../Rest/api/shoesController.service';

@Component({
  selector: 'app-register-shoes',
  templateUrl: './register-shoes.component.html',
  styleUrls: ['./register-shoes.component.css']
})
export class RegisterShoesComponent implements OnInit {

  zapatos: SelectItem[];
  item: string;
  image: any;
  params: any;





  showImagen = false;
  error = false;
  subiendo = false;
  archivo: any;
  urlImagen = null;

 //Inicializacion del objeto de la clase Shoes para el Post
  shoes: Shoes = {
    shoesColor: "",
    shoesMarca: "",
    shoesModelo: "",
    shoesid: 0,
    talla: "",
    url: ""
  };

  // Instacia del S3 Bucket 
  albumBucketName = 'imagenes-shoes';
   s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'imagenes-shoes' },
  });


  constructor(private servicioshoes: ShoesControllerService) {
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:6a1b91eb-c657-452f-8302-dffb3ed59e80',
    });
    this.zapatos = [
      { label: 'Nike', value: 'NIKE' },
      { label: 'Adidas', value: 'ADIDAS' },
      { label: 'Puma', value: 'PUMA' },
      { label: 'Reebok', value: 'REEBOK' },
      { label: 'Vans', value: 'VANS' },
    ];
  }


  ngOnInit(): void {
  }

  //Metodo para guardar la foto en el Bucket
  onClickSubir = async (event) => {
    event.preventDefault();

    if (this.archivo) {
      try {
        console.log(this.archivo);
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketName,
            Key: this.archivo.name,
            Body: this.archivo,
            ACL: 'public-read',
          },
        }).promise();

        this.shoes.url = data.Location;
        this.subiendo = false;
        this.showImagen = true;

        this.guardar();
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

  };
//Metdo para cargar foto
  onChange = (event) => {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
      console.log(this.archivo)
    }
  }

// metodo para guardar los datos en el back-end
  guardar() {
    this.servicioshoes.createShoesUsingPOST(this.shoes).subscribe(data => {
      console.log(this.shoes);
      window.alert('Se ha registrado sus zapatos correctamente');
    });
  }

}
