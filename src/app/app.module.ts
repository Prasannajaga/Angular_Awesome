import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, Children } from './app.component';
import { ReactiveProgrammingComponent } from './reactive-programming/reactive-programming.component';
import { HtmlToPlain, SearchToolComponent } from './search-tool/search-tool.component';
import {HttpClientModule} from '@angular/common/http'
import { Apiservice } from 'src/app/Services/Apiservice';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { PJModalComponent } from './pjmodal/pjmodal.component';
import { TimeZoneComponent } from './time-zone/time-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveProgrammingComponent,
    SearchToolComponent,
    HtmlToPlain,
    DynamicTemplateComponent,
    PJModalComponent,
    TimeZoneComponent,
    Children
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   ],
   entryComponents:[
    PJModalComponent
   ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
