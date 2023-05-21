import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
 import { HtmlToPlain, SearchToolbarComponent } from './search-toolbar/search-toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SearchSidebarComponent,
    SearchToolbarComponent,
    HtmlToPlain
   ],
  exports :[
    SearchSidebarComponent,
    SearchToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class SearchbooksModule { }
