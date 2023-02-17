import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenComponent } from './conten.component';
import { RoutingContenModule } from './routing-conten.module';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './body/body.component';
import { SkinComponent } from './skin/skin.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { HomeComponent } from './home/home.component';
import { HairComponent } from './hair/hair.component';
import { RegisterComponent } from './register/register.component';
import { FaceComponent } from './face/face.component';
import {SwiperModule} from 'swiper/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ModalProductsComponent } from './modal-products/modal-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';






@NgModule({
  declarations: [
   ContenComponent,
   HomeComponent,
   HairComponent,
   RegisterComponent,
   FaceComponent,
   CosmeticsComponent,
   SkinComponent,
   BodyComponent,
   ProductsHomeComponent,
   ModalProductsComponent

  ],
  imports: [
    CommonModule,
    RoutingContenModule,
    SharedModule,
    SwiperModule,
    NgbModule,
    HttpClientModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ContenModule { }
