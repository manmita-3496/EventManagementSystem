import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class ValidateIdProofService {

    constructor(private http:HttpClient) { }
    validateIdProof(data:any):Observable<String>{
      return this.http.post("http://localhost:8085/api/customer-service/customers/validid",data,{responseType:"text"});
    }
  }
