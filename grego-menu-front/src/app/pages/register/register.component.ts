import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  formRegister!: FormGroup;

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      document: this.fb.control(null, [Validators.required]),
      phone: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email])
    })
  }

  onSubmit(): void {
    this.router.navigate(['company']);
  }

}
