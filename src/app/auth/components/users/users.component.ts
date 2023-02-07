import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/interface/response/user';
import { ApiService } from 'src/app/services/api.service';
import { GetService } from 'src/app/services/get/get.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] | void = [];
  columns: string[] = ['Name', 'User Id', 'Phone Number', 'Email', 'View'];
  keys:string[] =[]
  type:number = 1
  constructor(
    private api: ApiService,
    private get: GetService,
    private toaster: ToastrService
  ) {}

  async ngOnInit(): Promise<void> {
    // console.log(this.users);
    this.manupulateData();
  }

  async manupulateData() {
    let data:User[]= await this.get.getallusers(1);
    let tempUser : User[] = []
    data.map((user)=>{
    let tempObj : User = {name:'',id:-1,phonenumber:-1,email:'',}
     this.keys = Object.keys(tempObj)
    tempObj['name'] = user.name 
    tempObj['id'] = user.id 
    tempObj['phonenumber'] = user.phonenumber 
    tempObj['email'] = user.email 
    tempUser.push(tempObj)
   })
   this.users = tempUser
   
   
  }
}
