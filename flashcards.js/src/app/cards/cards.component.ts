import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  selectedValue: string;

  decks = [
    { id: 0, title: 'CH1 Command Line' },
    { id: 1, title: 'CH2 Package Managers' },
    { id: 2, title: 'CH2 Libraries' },
    { id: 3, title: 'CH2 Processes' }
  ];

  constructor() { 
  }

  ngOnInit() {
  }

}
