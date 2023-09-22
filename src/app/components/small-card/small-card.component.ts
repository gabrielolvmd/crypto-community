import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  @Input()
  image:string|null|undefined;

  @Input()
  text:string|null|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
