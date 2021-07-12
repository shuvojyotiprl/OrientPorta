import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
   /* if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }*/
    this.router.navigate(['/guest/dashboard'])

  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
