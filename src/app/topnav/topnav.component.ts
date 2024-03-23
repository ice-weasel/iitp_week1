import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  openNavBar: boolean = false; // Initialize openNavBar with false
  
  constructor() { }

  toggleNavBar() {
    this.openNavBar = !this.openNavBar; // Toggle the value of openNavBar
  }
}
