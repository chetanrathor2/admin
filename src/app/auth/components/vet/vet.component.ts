import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/response/user';
import { GetService } from 'src/app/services/get/get.service';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.scss']
})
export class VetComponent implements OnInit {
  vet: User[] | void = [];
  columns: string[] = ['Name', 'User Id', 'Phone Number', 'Email', 'View'];
  keys:string[] =[]

  constructor(private get:GetService) { }

  async ngOnInit(): Promise<void> {
   this.manupulateData()
  }
  async manupulateData() {
    let data:User[]= await this.get.getallusers(2);
    let tempUser : User[] = []
   data.map((user)=>{
    let tempObj : User | any = {name:'',vet_id:-1,phonenumber:-1,email:'',}
     this.keys = Object.keys(tempObj)
    tempObj['name'] = user.name 
    tempObj['vet_id'] = user.id 
    tempObj['phonenumber'] = user.phonenumber 
    tempObj['email'] = user.email 
    tempUser.push(tempObj)
   })
   this.vet = tempUser
   
   
  }

}
