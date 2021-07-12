import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  showdiv3: boolean = false;

  constructor() { }

  showdiv2 = false;
 
  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({});


  @Input() error: string | null | undefined;

  onFetchOtp(){
    this.showdiv2 = !this.showdiv2
    
  }

  onValidate(){
    this.showdiv3 = !this.showdiv3
  }

}
