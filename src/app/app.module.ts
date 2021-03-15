import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxLocalStorageModule} from 'ngx-localstorage';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SnackVotingComponent } from './snack-voting/snack-voting.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackVotingComponent
  ],
  imports: [
    BrowserModule,
    NgxLocalStorageModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
