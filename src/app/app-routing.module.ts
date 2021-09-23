import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHouseComponent } from './components/list-house/list-house.component';
import { ListMemberComponent } from './components/list-member/list-member.component';

const routes: Routes = [
  {path: '', component: ListHouseComponent},
  {path: 'listMember/:valor', component: ListMemberComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
