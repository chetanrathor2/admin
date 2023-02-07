import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../../components/users/users.component';
import { ProfileComponent } from '../../users/components/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent,
  },
  {
    path:'profile/:id',
    component:ProfileComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
