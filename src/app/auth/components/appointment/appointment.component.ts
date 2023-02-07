import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Appointment } from 'src/app/interface/response/appointment';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  keys: string[] = [];
  constructor(private api: ApiService, private errorService: ErrorService) {}
  appointment: Appointment[] = [];
  columns: string[] = ['Appt. Number', 'User Name','Link','Vet Name','Phone Number','Status', 'Action'];

  ngOnInit(): void {
   this.manupulateData()
   console.log(this.appointment);
   
  }

  async getAllappointment() {
    this.appointment = await firstValueFrom(this.api.get('/appointment')).catch(
      (err) => {
        this.errorService.showErro(err);
      }
    );
  }

  async manupulateData() {
    let data:Appointment[]=  await firstValueFrom(this.api.get('/appointment')).catch((err)=>{
      this.errorService.showErro(err)
    })
    console.log(data);
    
    let tempOrder : Appointment[] = []
    data.map((appointment)=>{
    let tempObj : Appointment | any = {id:-1,name:'',link:'',vet:'',phonenumber:-1,status:''}
    this.keys = Object.keys(tempObj)
    tempObj['id'] = appointment.id 
    tempObj['name'] = appointment.name 
    tempObj['link'] = appointment.link 
    tempObj['vet'] = appointment.vet['name'] 
    tempObj['phonenumber'] = appointment.phonenumber 
    tempObj['status'] = appointment.status 
    tempOrder.push(tempObj)
   })
   this.appointment = tempOrder
   
   
  }




}
