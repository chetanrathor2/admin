import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BlogComponent } from './components/blog/blog.component';
import { MasterComponent } from './components/master/master.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';
import { VetComponent } from './components/vet/vet.component';

const routes: Routes = [
  {
    path:'',
    component:AuthComponent,
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        loadChildren:()=>import('../auth/module/dashboard/dashboard.module').then((m)=>m.DashboardModule)
      },
      {
        path:'users',
        loadChildren:()=>import('../auth/module/users/users.module').then((m)=>m.UsersModule)
      },
      {
        path:'vet',
        loadChildren:()=>import('../auth/module/vet/vet.module').then((m)=>m.VetModule)
      },
      {
        path:'order',
        loadChildren:()=>import('../auth/module/order/order.module').then((m)=>m.OrderModule)
      },
      {
        path:'appointment',
        loadChildren:()=>import('../auth/module/appointment/appointment.module').then((m)=>m.AppointmentModule)
      },
      {
        path:'product',
        loadChildren:()=>import('../auth/module/product/product.module').then((m)=>m.ProductModule)
      },
      {
        path:'blog',
        loadChildren:()=>import('../auth/module/blog/blog.module').then((m)=>m.BlogModule)
      },
      {
        path:'master',
        loadChildren:()=>import('../auth/module/master/master.module').then((m)=>m.MasterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
