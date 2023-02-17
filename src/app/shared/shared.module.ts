import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedRoutingModule } from "./shared-routing.module";
import { SharedComponent } from "./shared.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations :[
    SharedComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ],
  imports:[
    CommonModule,
    SharedRoutingModule,
    NgbModule


  ]


})

export class SharedModule{}
