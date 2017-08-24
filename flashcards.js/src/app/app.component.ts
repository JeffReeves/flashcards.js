import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.None 
  /* disable view encapsulation until a 
    better solution than ::ng-deep comes 
    along when using css grid */
})
export class AppComponent {
  title = 'flashcards.js';
  user: any = {
    login: false,
    name: 'Jeff'
  };

  selectedOption: string;

  constructor(public dialog: MdDialog) {}

  openLogin() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      console.log('selected option in modal: ', this.selectedOption);
    });
  }
}