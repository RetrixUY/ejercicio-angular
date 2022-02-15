import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ContentComponent } from './content/content.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import { HistoryItemComponent } from './history-item/history-item.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderBarComponent,
    ContentComponent,
    WalletListComponent,
    SideBarMenuComponent,
    WalletItemComponent,
    HistoryItemComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas,far,fab)
  }
}
