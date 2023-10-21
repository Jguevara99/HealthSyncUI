import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
import { routes } from '../routes/routes';
import { HttpClient } from '@angular/common/http';
import { LoginRequestDTO, LoginResponseDTO } from 'src/app/authentication/DTOS/LoginDtos';
import { RegisterRequestDTO, RegisterResponseDTO } from 'src/app/authentication/DTOS/RegisterDtos';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(loginDto:LoginRequestDTO): Promise<LoginResponseDTO>{
    const response = this.http.post<LoginResponseDTO>('https://localhost:7240/api/v1/authentication/login', loginDto);
    return firstValueFrom(response);
  }

  registro(registroDto:RegisterRequestDTO): Promise<RegisterResponseDTO>{
    const response = this.http.post<RegisterResponseDTO>('https://localhost:7240/api/v1/authentication/register', registroDto);
    return firstValueFrom(response);
  }

  // public login(): void {
  //   localStorage.setItem('authenticated', 'true');
  //   this.router.navigate([routes.adminDashboard]);
  // }
}
