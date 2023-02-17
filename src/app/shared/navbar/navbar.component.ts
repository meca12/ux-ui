import { Component, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuCollapsed = true;



  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu(){


  }


}
