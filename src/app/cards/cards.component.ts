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
  timecounter = 100;

  



  constructor () { 
    
  }

  ngOnInit(): void {
  
  }
 
  clickstart(){
  this.visible =  false
  console.log('this is working') ;

  let intervalId = setInterval(() => {
    this.timecounter = this.timecounter - 1;
    console.log(this.timecounter)
    if(this.timecounter === 0) clearInterval(intervalId)
}, 1000)
  console.log(this.timecounter) ;
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


counter(){
  // sobald die erste Karte geflipt ist fange an von 100 runterzählen time=100 -1 , 
  //wenn die Zeit abgelaufen ist und nicht alle karten umgedreht worden ist zeige Game Over - button restart 
  
}

win(){
// wenn alle karten gemacht sind zeige gewonnen 
// show overlay win & button to restart 

}


}


//can i take the images in to array and loop random to it for showing on game start , restart all random images ????? 
//how i can do it ? img = new [ fill i with font face image ? ]