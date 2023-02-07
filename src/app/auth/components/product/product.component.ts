import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:any
  constructor(private api:ApiService,private errorservice:ErrorService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  async getProduct(){
  this.products =  await firstValueFrom(this.api.get('/products')).catch((err)=>{
  this.errorservice.showErro(err)
  })
  }

}
