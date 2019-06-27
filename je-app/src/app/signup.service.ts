import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import {Signup} from './signup';

const API_URL = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  postSignup(signup: Signup): Observable<Signup>{
    const url = `${API_URL}/signup`;
    console.log("yesssss")
    return this.http.post<Signup>(url,signup);
  }
}
