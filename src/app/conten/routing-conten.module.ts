import { NgModule } from '@angular/core';
import { ContenComponent } from './conten.component';
import {Routes, RouterModule} from '@angular/router'
import { BodyComponent } from './body/body.component';
import { SkinComponent } from './skin/skin.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { HomeComponent } from './home/home.component';
import { HairComponent } from './hair/hair.component';
import { RegisterComponent } from './register/register.component';
import { FaceComponent } from './face/face.component';

const routes : Routes  = [{
  path :'',component:ContenComponent,
  children: [
     {path:'home',
     component:HomeComponent},
     {
      path:'body',
      component:BodyComponent
     },
     {
      path:'skin',
      component:SkinComponent

     },
     {
      path:'cosmetic',
      component:CosmeticsComponent

     },
     {
      path:'hair',
      component:HairComponent

     },
     {
      path:'face',
      component:FaceComponent

     },
     {
      path:'register',
      component:RegisterComponent

     }




  ]

}]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports :[RouterModule]
})
export class RoutingContenModule { }
