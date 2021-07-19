
import { Component, OnInit, } from '@angular/core';





@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})



export class CardsComponent implements OnInit {


//start game
  visible= true;
  timecounter = 100;
  ticker = 0;
 

//Audio
  flipsound =  new Audio ('./assets/audio/flip.wav');
  matchsound = new Audio ('./assets/audio/match.wav');
  winsound = new Audio ('./assets/audio/win.wav');
  gameoversound = new Audio('./assets/audio/sfx-defeat1.mp3');

  //cards 
  cardsArray = [];
  cardToCheck = 0;
 cards = Array.from(document.getElementsByClassName('card'));

 constructor () { 
  
   }

  ngOnInit(): void {
  }

 
clickstart(){
  this.clickcard();
  this.visible =  false;
  this.counter();
}


counter(){
  setInterval(() => {
    this.timecounter = this.timecounter - 1;
    if(this.timecounter === 0){
      this.gameover(); 
    }
}, 1000);
}

flip(){
  this.flipsound.play();
  this.ticker = this.ticker +1;


}


match(){
  this.matchsound.play();
}

gameover(){
  this.gameoversound.play();
  this.visible = true;
  this.timecounter = 100;


}

win(){
  this.winsound.play();
}


clickcard(){
  let cards = Array.from(document.getElementsByClassName('card'));
  cards.forEach(card => {
    card.addEventListener('click', ()=>{
      this.flip();
      this.matchCards();
      card.classList.add('visible');   
    })

    
  });

}

shuffleCards(){
 
}

matchCards(){


}

}
 









//match(){
// match sound 
// match cards 3d effekt ( make it in yoga cards)
//}

 //gameOver(){

//show overlay game over & button restart    // restart = 
// if timecounter = 0 show visible on overlay txt id game over txt 
//
 //}


//counter(){
  //wenn die Zeit abgelaufen ist und nicht alle karten umgedreht worden ist zeige Game Over - button restart 
  
//}

//win(){
// wenn alle karten gemacht sind zeige gewonnen 
// show overlay win & button to restart 



//can i take the images in to array and loop random to it for showing on game start , restart all random images ????? 
//how i can do it ? img = new [ fill i with font face image ? ]

//10 sec left counter color red & search sound counter !!
