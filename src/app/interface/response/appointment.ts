export interface Appointment {
  id:number
  user_id:number
  link:string
  status:string
  name:string
  phonenumber:number
  vet:{
    name:string
  }
}
