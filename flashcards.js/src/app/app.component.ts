import { Component, ViewEncapsulation } from '@angular/core';

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
}