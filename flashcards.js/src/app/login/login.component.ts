import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = {
    username: ''
  };

  constructor(public dialogRef: MdDialogRef<LoginComponent>) {
  }

  ngOnInit() {
  }

}
