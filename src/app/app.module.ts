import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMultipleDatesModule } from 'ngx-multiple-dates';
import { NgxSpinnerModule } from "ngx-spinner";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMultipleDatesModule,
    SharedModule,
    NgxSpinnerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvgLUU9sjsAM1QJ_hjY098BM2_q8_qWuY'
    })
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
