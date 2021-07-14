import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  visible= true;



  constructor() { 
    
  }

  ngOnInit(): void {
  
  }
 
  myfunction(){
  this.visible = false
  console.log('this is working')  
  }

}


