import { Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';

export interface Wallet {
  name: string,
  icon: IconName,
  symbol: string,
  money: number,
  fgColor: string,
  bgColor: string,
}

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.css']
})
export class WalletItemComponent implements OnInit {

  @Input() wallet!: Wallet;

  constructor() { }

  ngOnInit(): void {
  }

}
