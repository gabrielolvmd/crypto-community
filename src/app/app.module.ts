import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { IntroSectionComponent } from './components/intro-section/intro.component';
import { GradientButtonComponent } from './components/gradient-button/gradient-button.component';
import { BorderButtonComponent } from './components/border-button/border-button.component';
import { TradeCardComponent } from './components/trade-card/trade-card.component';
import { DefaultPComponent } from './components/default-p/default-p.component';
import { DefaultTitleComponent } from './components/default-title/default-title.component';
import { GradientCardComponent } from './components/gradient-card/gradient-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    IntroSectionComponent,
    GradientButtonComponent,
    BorderButtonComponent,
    TradeCardComponent,
    DefaultPComponent,
    DefaultTitleComponent,
    GradientCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
