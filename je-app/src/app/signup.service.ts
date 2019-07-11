import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import {Signup} from './signup';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*'
    // 'Authorization': 'my-auth-token'
  })
};

const API_URL = environment.apiURL;
@Injectable({
  providedIn: 'root'
})

export class SignupService {
  startDate: Date;

  constructor(private http: HttpClient) { 
    this.startDate = new Date();
    this.startDate
  }

  postSignup(signup: Signup): Observable<Signup>{
    const url = `${API_URL}/signup/`;
    return this.http.post<Signup>(url, signup, httpOptions);
  }
}
