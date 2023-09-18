import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-trade-card',
  templateUrl: './trade-card.component.html',
  styleUrls: ['./trade-card.component.scss']
})
export class TradeCardComponent implements OnInit {

  @Input()
  title:string = ''

  @Input()
  value:string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
