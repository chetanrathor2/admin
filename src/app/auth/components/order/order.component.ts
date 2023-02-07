import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Order } from 'src/app/interface/response/order';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
orders :Order[] = []
columns: string[] = ['Order Number', 'User Name','User Id','Date of order','Charge Amount','Mode of transfer', 'order status'];
keys:string[] =[]


  constructor(private api:ApiService,private errorService:ErrorService) { }

  async ngOnInit(): Promise<void> {
  // this.getOrder()
  await this.manupulateData()
  }

  // async getOrder(){
  //   this.orders =
    
  // }

  async manupulateData() {
    let data:Order[]=  await firstValueFrom(this.api.get('/orders')).catch((err)=>{
      this.errorService.showErro(err)
    })
    let tempOrder : Order[] = []
    data.map((order)=>{
    let tempObj : Order = {id:-1,name:'',user_id:-1,created_at:-1,charge_amount:-1,mode_of_transfer:'',order_status:'',}
    this.keys = Object.keys(tempObj)
    tempObj['id'] = order.id 
    tempObj['name'] = order.name 
    tempObj['user_id'] = order.user_id 
    tempObj['created_at'] = order.created_at 
    tempObj['charge_amount'] = order.charge_amount
    tempObj['mode_of_transfer'] = order.mode_of_transfer
    tempObj['order_status'] = order.order_status
    tempOrder.push(tempObj)
   })
   this.orders = tempOrder
   
   
  }
}
