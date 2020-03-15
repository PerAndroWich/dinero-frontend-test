import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sw-header',
  templateUrl: './sw-header.component.html',
  styleUrls: ['./sw-header.component.scss']
})
export class SwHeaderComponent implements OnInit {
  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
