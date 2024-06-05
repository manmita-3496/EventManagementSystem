import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllCustomerService {

  constructor(private http:HttpClient) { }
  getAllCustomers(){
    return this.http.get("http://localhost:8080/api/customers")
  }
}


