import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adress-company',
  templateUrl: './address-company.component.html'
})
export class AddressCompanyComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  formAddressCompany!: FormGroup;

  ngOnInit(): void {
    this.formAddressCompany = this.fb.group
      ({
        postCode: this.fb.control(null, [Validators.required]),
        address: this.fb.control(null, [Validators.required]),
        number: this.fb.control(null, [Validators.required]),
        complement: this.fb.control(null),
        district: this.fb.control(null, [Validators.required]),
        city: this.fb.control(null, [Validators.required]),
        states: this.fb.control(null, [Validators.required])
      })
  }

  onSubmit() {
    this.router.navigate(['finish'])
  }

  back() {
    this.router.navigate(['company'])
  }

}
