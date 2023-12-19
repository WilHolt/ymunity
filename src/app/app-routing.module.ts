import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tenancies',
    data:{
      breadcrumb: 'Tenancies'
    },
    loadChildren: () => import('./modules/tenancies/tenancies.module').then(m => m.TenanciesModule)
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
