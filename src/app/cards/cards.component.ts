import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  visible= true;
  card = Array.from(document.getElementsByClassName('card'));
  flipSound  
  matched
    


  constructor() { 
    this.flipSound = new Audio('assets/audio/mixkit-fast-smallsweep-transition-166.wav');
    this.matched = new Audio('assets/audio/mixkit-retro-game-notification-212.wav');
  }

  ngOnInit(): void {
  
  }
 
  clickstart(){
  this.visible = false
  console.log('this is working')  
  }


ready(){
  this.card.forEach(card => {
    card.addEventListener('click', ()=>{
      console.log('click');
    })
  })
}
}


