import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateCustomerService {

  constructor(private http:HttpClient) { }
  validateCustomer(data:any){
    return this.http.post("http://localhost:8080/api/customers/validateCustomer",data);
  }
}
