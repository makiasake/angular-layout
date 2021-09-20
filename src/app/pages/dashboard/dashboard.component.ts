import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENU } from '../menus';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menus: Menu[] = MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
