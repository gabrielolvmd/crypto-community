import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-default-p',
  templateUrl: './default-p.component.html',
  styleUrls: ['./default-p.component.scss']
})
export class DefaultPComponent implements OnInit {
  @Input()
  text:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
