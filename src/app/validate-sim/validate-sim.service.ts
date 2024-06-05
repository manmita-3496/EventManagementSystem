import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValidateSimService {

  constructor(private http:HttpClient) { }
  validateSim(data:any):Observable<String>{
    return this.http.post("http://localhost:8090/api/simDetails/simService",data,{responseType:"text"});
  }
}
