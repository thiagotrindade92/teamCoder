import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',

})
export class CreatePasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formPassword!: FormGroup;
  hidepassword = true;
  hiderepeatpassword = true;


  ngOnInit(): void {
    this.formPassword = this.fb.group({
      password: this.fb.control(null, [Validators.required]),
      repeatpass: this.fb.control(null, [Validators.required])
    })
  }

}
