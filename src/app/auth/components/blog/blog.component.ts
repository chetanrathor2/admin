import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Blog } from 'src/app/interface/response/blog';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
blogs:Blog[] = []
  keys: string[] = [];
  columns: string[] = ['Blog Title','Category','Post Date','Action'];
  constructor(private api:ApiService,private errorService:ErrorService) { }

  ngOnInit(): void {
    // this.getAllBlogs()
    this.manupulateData()
  }

  async getAllBlogs(){
this.blogs = await firstValueFrom(this.api.get('/blogs')).catch((err)=>{
  this.errorService.showErro(err)
})
  }

  async manupulateData() {
    let data:Blog[]=  await firstValueFrom(this.api.get('/blogs')).catch((err)=>{
      this.errorService.showErro(err)
    })

    console.log(data);
    
    
    let tempOrder : Blog[] = []
    data.map((blog)=>{
    let tempObj : Blog | any = {image:'',blog_title:'',category:''}
    this.keys = Object.keys(tempObj)
    tempObj['image'] = blog.image['url'] 
    tempObj['blog_title'] = blog.blog_title 
    tempObj['category'] = blog.category 
    tempOrder.push(tempObj)
   })
   this.blogs = tempOrder
   
   
  }



}
