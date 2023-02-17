import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path :  '', redirectTo:'./home', pathMatch:'full'
  },
  {
    path : '', loadChildren:() => import('./conten/conten.module').then(m => m.ContenModule)
  },

    {
      path : '',
      loadChildren :() => import('./shared/shared.module').then(m => m.SharedModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
