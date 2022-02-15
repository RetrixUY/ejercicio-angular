import { Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';

export interface HistoryItem  {
  type: 'buy' | 'transfer' | 'exchange' | 'invoice',
  title: string,
  status: 'failed' | 'canceled' | 'done' | 'pending',
  coinValue: string,
  coinSymbol: string,
  moneyValue: string,
  moneySymbol: string,
  date: string
}

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  @Input() item!: HistoryItem;

  icon!: IconName;

  constructor() { }

  ngOnInit(): void {
    switch(this.item.type){
      case 'buy':
        this.icon = 'arrow-down'
        break;
      case 'exchange':
        this.icon = 'exchange-alt'
        break;
      case 'invoice':
        this.icon = 'file'
        break;
      case 'transfer':
        this.icon = 'arrow-up'
        break;
    }
  }

}
