import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.stars.length = this.rating;
    this.starWidth = this.rating * 15;
  }

  @Input() rating: any;
  @Output() ratingClick : EventEmitter<string> = new EventEmitter<string>();
  //stars = [];
  starWidth = 0;


  onclickRating(){
    console.log("en el click ")
    this.ratingClick.emit(`The rating ${this.rating} was clicked`);
  }


  
  

}
