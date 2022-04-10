import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-registration',
  templateUrl: './finish.component.html',
})
export class FinishComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate(['login']);
  }

}
