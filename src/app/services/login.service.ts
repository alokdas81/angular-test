import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(data){
    console.log(data);
    return this.http.post('http://ec2-35-183-174-130.ca-central-1.compute.amazonaws.com/api/login', data);
  }
}
