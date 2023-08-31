import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'end',component:EndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
