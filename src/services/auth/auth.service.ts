import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body){
    return this.http.post('https://city-rolls.com/api/users/token.json', body);
  }  
}
