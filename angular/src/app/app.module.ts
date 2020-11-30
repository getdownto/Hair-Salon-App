import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { MeetTheTeamComponentComponent } from './meet-the-team-component/meet-the-team-component.component';
import { TeamMemberCartComponent } from './team-member-cart/team-member-cart.component';
import { TeamService } from './team.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponentComponent,
    MeetTheTeamComponentComponent,
    TeamMemberCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
