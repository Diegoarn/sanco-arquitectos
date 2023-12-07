import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // menuItems = [
  //   { name: 'Residencial Público', route: '/ruta-opcion-1' },
  //   { name: 'Residencial Privado', route: '/ruta-opcion-2' },
  //   { name: 'Vivienda unifamiliar', route: '/ruta-opcion-3' },
  //   { name: 'Edificios singulares', route: '/ruta-opcion-1' },
  // ];

  // isMenuOpen = false;

  // constructor(private router: Router) {}

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  // goToRoute(route: string) {
  //   this.router.navigate([route]);
  // }

  ngOnInit(): void {}
  scroll = window.scrollTo(0, 0);
}
