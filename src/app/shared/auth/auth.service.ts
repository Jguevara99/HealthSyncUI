import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
import { routes } from '../routes/routes';
import { HttpClient } from '@angular/common/http';
import { LoginRequestDTO, LoginResponseDTO } from 'src/app/authentication/DTOS/LoginDtos';
import { RegisterRequestDTO, RegisterResponseDTO } from 'src/app/authentication/DTOS/RegisterDtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(loginDto:LoginRequestDTO): Observable <LoginResponseDTO>{
    return this.http.post<LoginResponseDTO>('https://localhost:7240/api/v1/authentication/login', loginDto);
  }

  registro(registroDto:RegisterRequestDTO):Observable<RegisterResponseDTO>{
    return this.http.post<RegisterResponseDTO>('https://localhost:7240/api/v1/authentication/register', registroDto);
  }

  // public login(): void {
  //   localStorage.setItem('authenticated', 'true');
  //   this.router.navigate([routes.adminDashboard]);
  // }
}
