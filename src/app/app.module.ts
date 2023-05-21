import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, Children } from './app.component';
import { ReactiveProgrammingComponent } from './reactive-programming/reactive-programming.component';
 import {HttpClientModule} from '@angular/common/http'
import { Apiservice } from 'src/app/Services/Apiservice';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { PJModalComponent } from './pjmodal/pjmodal.component';
import { TimeZoneComponent } from './time-zone/time-zone.component';
import { SearchToolbarComponent } from './Search-Books-Projects/searchbooks/search-toolbar/search-toolbar.component';
import { SearchSidebarComponent } from './Search-Books-Projects/searchbooks/search-sidebar/search-sidebar.component';
import { SearchbooksModule } from './Search-Books-Projects/searchbooks/searchbooks.module';
  
@NgModule({
  declarations: [
    AppComponent,
    ReactiveProgrammingComponent,
      DynamicTemplateComponent,
    PJModalComponent,
    TimeZoneComponent,
    Children, 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchbooksModule
    ],
   entryComponents:[
    PJModalComponent
   ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
