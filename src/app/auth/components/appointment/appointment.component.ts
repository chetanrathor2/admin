import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(private api:ApiService,private errorService:ErrorService) { }
appointment:any
  ngOnInit(): void {
    this.getAllappointment()
  }

  async getAllappointment(){
   this.appointment =  await firstValueFrom(this.api.get('/appointment')).catch((err)=>{
    this.errorService.showErro(err)
   })
  }
}
