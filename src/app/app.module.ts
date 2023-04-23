import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveProgrammingComponent } from './reactive-programming/reactive-programming.component';
import { HtmlToPlain, SearchToolComponent } from './search-tool/search-tool.component';
import {HttpClientModule} from '@angular/common/http'
import { Apiservice } from 'src/app/Services/Apiservice';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveProgrammingComponent,
    SearchToolComponent,
    HtmlToPlain,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
