import { Component, Input, NgIterable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/interface/response/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit ,OnChanges{
@Input()  users :any
@Input() columns :string[] = []
@Input() keys :string[] = []

  constructor() { }
  // column!:any

  ngOnInit(): void {
    // console.log(this.users);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.users);
  // this.keyOfTable = this.users?Object.keys(this.users[0]):''
  //  console.log(this.column);
  console.log(this.columns);
  console.log(this.users);
  
  }
}
