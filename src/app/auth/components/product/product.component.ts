import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from 'src/app/interface/response/product';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:Product[] = []
  columns: string[] = ['Product Name','Category','Price','Status','Action'];
  keys:string[] =[]
  constructor(private api:ApiService,private errorservice:ErrorService) { }

  ngOnInit(): void {
    this.manupulateData()
  }

  async getProduct(){
  this.products =  await firstValueFrom(this.api.get('/products')).catch((err)=>{
  this.errorservice.showErro(err)
  })
  }

  async manupulateData() {
    let data:Product[]=  await firstValueFrom(this.api.get('/products')).catch((err)=>{
      this.errorservice.showErro(err)
    })
    let tempOrder : Product[] = []
    data.map((product)=>{
    let tempObj : Product | any = {data:'',Category:'',Price:-1,Status:'',id:-1}
    this.keys = Object.keys(tempObj)
    let data :any  = {}
    // tempObj['data']['image'] = product.image['url'] 
    // tempObj['Product_Name'] = product.Product_Name
    data['image'] = product.image
    data['Product_Name'] = product.Product_Name
    tempObj['data'] = data
    tempObj['Category'] = product.Category
    tempObj['Price'] = product.Price
    tempObj['Status'] = product.Status
    tempObj['id'] = product.id
    console.log(tempObj);
    
    tempOrder.push(tempObj)
   })
   this.products = tempOrder
   
   
  }


}
