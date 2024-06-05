import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class ValidateCustomerDetailsService {

  constructor(private http:HttpClient) { }
  
  validateCustomerDetails(data:any):Observable<String>{
    return this.http.post("http://localhost:8080/api/customers/validate-customer-details",data,{responseType:"text"});
  }
}
