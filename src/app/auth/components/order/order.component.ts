import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
orders :any
  constructor(private api:ApiService,private errorService:ErrorService) { }

  async ngOnInit(): Promise<void> {
  this.getOrder()
  }

  async getOrder(){
    this.orders = await firstValueFrom(this.api.get('/orders')).catch((err)=>{
      this.errorService.showErro(err)
    })
    // console.log(this.orders);
    
  }

}
