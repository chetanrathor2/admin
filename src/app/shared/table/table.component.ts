import { AfterViewInit, Component, Input, NgIterable, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { User } from 'src/app/interface/response/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit ,OnChanges{
@Input()  data :User[]|any
@Input() columns :string[] = []
@Input() keys :string[] = []
@Input() type :number = -1
// @ViewChild('imageele') img = ''
  constructor() { }
  // column!:any

  ngOnInit(): void {
    // console.log(this.users);
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.users);
  // this.keyOfTable = this.users?Object.keys(this.users[0]):''
  //  console.log(this.column);
  console.log(this.data);
  

  // console.log(this.data);
  
  
  }
}
