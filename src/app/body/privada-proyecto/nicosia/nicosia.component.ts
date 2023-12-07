import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nicosia',
  templateUrl: './nicosia.component.html',
  styleUrls: ['./nicosia.component.css'],
})
export class NicosiaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  scroll = window.scrollTo(0, 0);
}
