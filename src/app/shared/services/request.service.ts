import { user } from './../models/user.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { api_url } from "src/environments/environments";
import { Observable } from "rxjs";


@Injectable({
  providedIn:'root'
})

export class reqService{

  private api = api_url;

  constructor(private http:HttpClient){}

  public getUserByCpf(cpf:string){
      return this.http.get(this.api + `registers?cpf=${cpf}`)
  }



}
