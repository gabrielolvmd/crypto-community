import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-default-title',
  templateUrl: './default-title.component.html',
  styleUrls: ['./default-title.component.scss']
})
export class DefaultTitleComponent implements OnInit {
  @Input()
  title:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
