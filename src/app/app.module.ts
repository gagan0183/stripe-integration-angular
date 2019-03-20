import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StripeComponent } from './stripe/stripe.component';
import { NgxStripeModule } from 'ngx-stripe';
import { StripVersionComponent } from './strip-version/strip-version.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    StripeComponent,
    StripVersionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_9DQ7YDBRqYYLraeQai5GToyC')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
