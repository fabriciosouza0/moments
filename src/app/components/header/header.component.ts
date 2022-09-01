import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

  menu(event: Event) {
    event.stopPropagation();
    const navLinks = document.getElementsByClassName('nav-links')[0];

    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    } else {
      navLinks.classList.add('show');
    }
  }

}
