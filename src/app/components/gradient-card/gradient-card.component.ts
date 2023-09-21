import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gradient-card',
  templateUrl: './gradient-card.component.html',
  styleUrls: ['./gradient-card.component.scss']
})
export class GradientCardComponent implements OnInit {

  @Input()
  image:string|null|undefined;

  @Input()
  alt:string|null|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
