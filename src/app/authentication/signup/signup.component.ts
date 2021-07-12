import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { getMatIconNameNotFoundError } from '@angular/material/icon';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   genders = ['Male','Female','Other']


   form: FormGroup = new FormGroup({
     firstname: new FormControl(''),
     lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    gender:new FormControl(''),
    mobile: new FormControl('')
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
