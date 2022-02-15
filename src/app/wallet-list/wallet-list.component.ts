import { Component, OnInit } from '@angular/core';
import { Wallet } from '../wallet-item/wallet-item.component';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {

  wallets: Wallet[] = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: 'btc',
      money: 1.23,
      fgColor: 'white',
      bgColor: 'orange',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      icon: 'ethereum',
      money: 3.41,
      fgColor: 'black',
      bgColor: '#eef1f6',
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      icon: 'sketch',
      money: 1204.53,
      fgColor: 'white',
      bgColor: 'green',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
