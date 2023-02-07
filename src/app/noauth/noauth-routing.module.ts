import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NoauthComponent } from './noauth.component';

const routes: Routes = [
 {
  path:'',
  component:NoauthComponent,
  children:[
    {
      path:'',
      redirectTo:'login',
      pathMatch:'full'
    },
    {
      path:'login',
      component:LoginComponent
    }
  ]
 },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoauthRoutingModule { }
