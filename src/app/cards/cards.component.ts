import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  visible= true;
  card = Array.from(document.getElementsByClassName('card'));
    


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
    })
  })
}
}


