import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  visible= true;
  card = Array.from(document.getElementsByClassName('card'));
   matchsound = Audio;
   flipsound = Audio;


  constructor() { 
    
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
      // i think this is not working !! 
    })
  })
}

flip(){
  //flip sound & flip counter
}

match(){
// match sound 
}

gameOver(){

//show overlay game over & button restart 
}


timer(){
// from 100 to 0 counter -
}

win(){

// show overlay win & button to restart 
}


}


