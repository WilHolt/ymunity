import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenanciesComponent } from './tenancies.component';

const routes: Routes = [
  {
    path: '',
    data:{
      breadcrumb: ''
    },
    children: [
      {
        path: ':name',
        component: TenanciesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenanciesRoutingModule { }
