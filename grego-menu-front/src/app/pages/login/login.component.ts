import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  hide = true;
  loginform!: FormGroup;

  // Validar CPF ou CNPJ no input usuário,
  // Nesse primeiro cenario apenas a validação por CPF

  ngOnInit(): void {
    this.loginform = this.fb.group({
      document: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(): void {
    this.router.navigate(['home']);
  }

}
