
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  visible= true;
  timecounter = 100;
 
  
  //card = Array.from(document.getElementsByClassName('card'));

//Audio
  flipsound =  new Audio ('./assets/audio/flip.wav');
  matchsound = new Audio ('./assets/audio/match.wav');
  winsound = new Audio ('./assets/audio/win.wav')

  

 constructor () { 
   }

  ngOnInit(): void {
  }

 
clickstart(){
  this.clickcard()
  this.visible =  false;
  let intervalId = setInterval(() => {
    this.timecounter = this.timecounter - 1;
    if(this.timecounter === 0) clearInterval(intervalId)
}, 1000);
}


flip(){
  this.flipsound.play();
}


match(){
  this.matchsound.play();
}

win(){
  this.winsound.play();
}


 clickcard(){
  let cards = Array.from(document.getElementsByClassName('card'));


  cards.forEach(card => {
    card.addEventListener('click', ()=>{

      this.flip();
    })
    
  });
}



}





   // restart = 
// if timecounter = 0 show visible on overlay txt id game over txt 
//






 //ready(){
  // this.card.forEach(card => {
   //  card.addEventListener('click', ()=>{

   //    console.log('click');
      // i think this is not working !! 
   //  })
  //  })
 //}


//flip(){
  //flip sound & flip counter
//}

//match(){
// match sound 
//}

 //gameOver(){

//show overlay game over & button restart 
 //}


//counter(){
  // sobald die erste Karte geflipt ist fange an von 100 runterzählen time=100 -1 , 
  //wenn die Zeit abgelaufen ist und nicht alle karten umgedreht worden ist zeige Game Over - button restart 
  
//}

//win(){
// wenn alle karten gemacht sind zeige gewonnen 
// show overlay win & button to restart 



//can i take the images in to array and loop random to it for showing on game start , restart all random images ????? 
//how i can do it ? img = new [ fill i with font face image ? ]