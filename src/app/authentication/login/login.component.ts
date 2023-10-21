import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public passwordClass = false;

  form = new FormGroup({
    email: new FormControl('admin@dreamguys.in', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(public auth: AuthService, private readonly router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }

  async loginFormSubmit() {
    if (this.form.valid) {
      const request = await this.auth.login({username: String(this.form.controls.email.value), password:String(this.form.controls.password.value)});
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem("AuthToken", request.jwt.token);
      localStorage.setItem("RefreshToken", request.jwt.refreshtoken);
      this.router.navigate([routes.adminDashboard]);
    }
  }
  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
}
