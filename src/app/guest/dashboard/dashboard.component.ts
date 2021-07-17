import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  enableEditName: boolean = false;
  enableEditEmail: boolean = false;
  enableEditGender: boolean = false;
  enableEditPhone: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  panelOpenState = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  editName(){
    this.enableEditName=!this.enableEditName;
  }

  editEmail(){
    this.enableEditEmail = !this.enableEditEmail;
  }

  editGender(){
    this.enableEditGender = !this.enableEditGender
  }

  editMobile(){
    this.enableEditPhone = !this.enableEditPhone
  }

  navigateTaskApp(){
    this.router.navigate(['/guest/dashboard/task'])
  }
}
