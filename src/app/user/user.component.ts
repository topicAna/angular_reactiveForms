import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl ('');
  streetAddress = new FormControl ('');
  postCode = new FormControl ('');
  city = new FormControl ('');
  user = new User();

  constructor() { }

  ngOnInit() {
 
  }

  submitForm(){
    this.user.username = this.username.value;
    this.user.email =this.email.value;
    this.user.password =this.password.value;
    this.user.streetAddress =this.streetAddress.value;
    this.user.postCode =this.postCode.value;
    this.user.city =this.city.value;

    console.log(this.username.value)
  }

  
}
