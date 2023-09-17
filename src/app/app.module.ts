import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { IntroSectionComponent } from './components/intro-section/intro.component';
import { GradientButtonComponent } from './components/gradient-button/gradient-button.component';
import { BorderButtonComponent } from './components/border-button/border-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    IntroSectionComponent,
    GradientButtonComponent,
    BorderButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
