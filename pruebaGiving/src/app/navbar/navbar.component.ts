import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";


declare const window: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sticky: boolean = false;

  constructor() { }

  ngOnInit() {
   
  }
  

}
