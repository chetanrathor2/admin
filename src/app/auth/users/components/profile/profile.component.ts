import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  selected = 2;
  ngOnInit(): void {
  }

  changeSelected(data:number){
    // console.log(data);
    
    this.selected = data
    // console.log(this.selected);
    
  }
}
