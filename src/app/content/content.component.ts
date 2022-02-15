import { Component, OnInit } from '@angular/core';
import { HistoryItem } from '../history-item/history-item.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  history: HistoryItem[] = [
    {
      type: 'buy',
      title: 'Buy USDT',
      status: 'pending',
      moneySymbol: 'EUR',
      moneyValue: '- 50',
      coinSymbol: 'USDT',
      coinValue: '1024.53',
      date: '23 apr. at 12:59 AM',
    },
    {
      type: 'buy',
      title: 'Buy USDT',
      status: 'failed',
      moneySymbol: 'EUR',
      moneyValue: '- 50',
      coinSymbol: 'USDT',
      coinValue: '1024.53',
      date: '23 apr. at 12:59 AM',
    },
    {
      type: 'buy',
      title: 'Buy USDT',
      status: 'canceled',
      moneySymbol: 'EUR',
      moneyValue: '- 50',
      coinSymbol: 'USDT',
      coinValue: '1024.53',
      date: '23 apr. at 12:59 AM',
    },
    {
      type: 'buy',
      title: 'Buy USDT',
      status: 'done',
      moneySymbol: 'EUR',
      moneyValue: '- 50',
      coinSymbol: 'USDT',
      coinValue: '1024.53',
      date: '23 apr. at 12:59 AM',
    },
    {
      type: 'transfer',
      title: 'Transfer USDT',
      status: 'done',
      moneySymbol: 'EUR',
      moneyValue: '50',
      coinSymbol: 'USDT',
      coinValue: '50',
      date: '23 apr. at 12:59 AM',
    },
    {
      type: 'exchange',
      title: 'Exchanged from USDT to BTC',
      status: 'done',
      moneySymbol: 'EUR',
      moneyValue: '- 450.01',
      coinSymbol: 'BTC',
      coinValue: '0.075',
      date: '23 apr. at 12:59 AM',
    },
    {
      type: 'invoice',
      title: 'Invoice',
      status: 'done',
      moneySymbol: 'EUR',
      moneyValue: '- 450.01',
      coinSymbol: 'USDT',
      coinValue: '1024.00',
      date: '23 apr. at 12:59 AM',
    },
  ]

  pending = this.history.filter(i => i.status === 'pending');

  done = this.history.filter(i => i.status != 'pending');

  constructor() { }

  ngOnInit(): void {
  }

}
