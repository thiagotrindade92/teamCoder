import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  formCompany!: FormGroup;

  ngOnInit(): void {
    this.formCompany = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      document: this.fb.control(null),
    })
  }

  onSubmit() {
    this.router.navigate(['addresscompany'])
  }

  back(): void {
    this.router.navigate(['register']);
  }

}
