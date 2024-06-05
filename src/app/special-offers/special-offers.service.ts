import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialOffersService {

  constructor(private http:HttpClient) { }
  simoffers(data:any){
    return this.http.post("http://localhost:8080/api/sim-service/simoffers",data);
  }
}
