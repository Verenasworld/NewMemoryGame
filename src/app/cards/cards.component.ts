
import { Component, OnInit, } from '@angular/core';





@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})



export class CardsComponent implements OnInit {
//Audio
flipsound =  new Audio ('./assets/audio/flip.wav');
matchsound = new Audio ('./assets/audio/match.wav');
winsound = new Audio ('./assets/audio/win.wav');
gameoversound = new Audio('./assets/audio/sfx-defeat1.mp3');

//start game
  visible= true;
  timecounter = 100;
  ticker = 0;
 



  //cards 
  cardsArray = [];
  cardToCheck = 'card.src';
  card = document.querySelectorAll('.card')


 constructor () { 
  
   }

  ngOnInit(): void {
  }

 
clickstart(){
  this.shuffleCards()
  this.clickcard();
  this.visible = false;
  this.counter();
}



shuffleCards(){
 //mach das die Bilder immer verschieden positioniert werden ?? wie geht das?? 
let images = document.querySelectorAll('img')
let srcs = ['../assets/media/handtandgirl.jpg','../assets/media/hangingsportgirl.jpg', '../assets/media/hangingsportgirlkm.jpg'
,'../assets/media/Sportgirlicons.png','../assets/media/sportgirlxy.jpg','../assets/media/yogimove123.jpg','../assets/media/yogigirlkm.jpg','../assets/media/yogigirlxy.jpg']

for(let i=srcs.length-1; i>0; i--){
  let j = Math.floor(Math.random()* i)
  let temp = srcs[i]
  srcs[i] = srcs[j]
  srcs[j] = temp
}

for(let i=0; i<images.length; i ++){
  console.log(images)
  images[i].src = srcs[i]
}
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

matchCards(){
  // src the same ?? 
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
