import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { RegisterRequestDTO, UserProfileDTO } from '../interfaces/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  signup(signupRequest: RegisterRequestDTO) {
    const url = `${this.baseUrl}/auth/register`;
    return this.http.post<UserProfileDTO>(url, signupRequest);    
  }

}
