import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'
import { emailValidator } from './email-validator'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  userForm:FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.fb.group({
    
      username: ['', [Validators.required]],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
      streetAddress: ['', [Validators.required,]],
      postCode: ['', [Validators.required,]],
      city: ['', [Validators.required,]],
  
    });
 
  }


  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get streetAddress() {
    return this.userForm.get('streetAddress');
  }

  get postCode() {
    return this.userForm.get('postCode');
  }

  get city() {
    return this.userForm.get('city');
  }

  submitForm(){

     console.log(this.userForm.value)
      
  }

  
}
