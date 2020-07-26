import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { ShoesInterface } from '../Model/Shoes';



@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private http: HttpClient) { }

  proveedor: Observable<any>;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  
  // tslint:disable-next-line: max-line-length
  registerUsuario(foto: number,nombre: string,userid: number) {
    const url_api = 'https://82ha02k1q3.execute-api.us-east-1.amazonaws.com/postUser';
    return this.http
      .post<ShoesInterface>(
        url_api,
        {
            foto: foto,
            nombre: nombre,
            userid: userid
        },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }


  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

 
guardarProveedor(shoes: ShoesInterface): Observable < ShoesInterface>{
  return this.http.post< ShoesInterface>('https://82ha02k1q3.execute-api.us-east-1.amazonaws.com/ingresoUsuarios', shoes);
}

getQuery(query: string){
    const url = `https://82ha02k1q3.execute-api.us-east-1.amazonaws.com/${query}`;
    console.log(url);
    return this.http.get(url);
  }
  getShoes(): Observable<any> {
    const url='getUsuarios/';
    return this.getQuery(url);
  }


}
