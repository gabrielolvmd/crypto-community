import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-button',
  templateUrl: './border-button.component.html',
  styleUrls: ['./border-button.component.scss'],
})
export class BorderButtonComponent implements OnInit {
  content: string = 'Create';
  constructor() {}

  ngOnInit(): void {}
}
