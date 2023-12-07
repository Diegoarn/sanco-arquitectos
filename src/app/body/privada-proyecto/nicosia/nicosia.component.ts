import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nicosia',
  templateUrl: './nicosia.component.html',
  styleUrls: ['./nicosia.component.css'],
})
export class NicosiaComponent implements OnInit {
  titulo = '';
  rutaFoto = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.rutaFoto = params['proyecto'];
    });
  }

  ngOnInit(): void {
    this.titulo = 'Residencial Nicosia, Madrid';
    this.rutaFoto = 'nicosia';
  }
  scroll = window.scrollTo(0, 0);
}
