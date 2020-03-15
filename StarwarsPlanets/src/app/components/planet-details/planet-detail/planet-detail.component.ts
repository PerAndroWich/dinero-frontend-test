import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  detail: string;

  constructor() { }

  ngOnInit(): void {
  }

}
