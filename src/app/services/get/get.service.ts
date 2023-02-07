import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, map } from 'rxjs';
import { User } from 'src/app/interface/response/user';
import { ApiService } from '../api.service';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private api:ApiService,private errorService:ErrorService,private toasterService:ToastrService) { }
  async getallusers(type:number):Promise< User[]>{
    let req = {'type':type}
    let resn :User[]
    let res = await firstValueFrom(this.api.get('/user',req))
    .catch((err)=>{
      console.log(err);
      
    this.errorService.showErro(err)
    
    })
    
    // console.log(res);
   return res;
    
  }
}
