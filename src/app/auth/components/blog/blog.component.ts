import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
blogs:any
  constructor(private api:ApiService,private errorService:ErrorService) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }

  async getAllBlogs(){
this.blogs = await firstValueFrom(this.api.get('/blogs')).catch((err)=>{
  this.errorService.showErro(err)
})
  }

}
