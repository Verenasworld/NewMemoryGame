import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  cards = Array.from(document.getElementsByClassName('card'));


  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

removeVisible(){
  console.log('clickiii');
}

}
