import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, Children } from './app.component';
import { ReactiveProgrammingComponent } from './reactive-programming/reactive-programming.component';
import { HttpClientModule } from '@angular/common/http'
import { Apiservice } from 'src/app/Services/Apiservice';
import { DynamicTemplateComponent   } from './dynamic-template/dynamic-template.component';
import { PJModalComponent, ProvideInjection, extractPipe } from './pjmodal/pjmodal.component';
import { TimeZoneComponent } from './time-zone/time-zone.component';
import { SearchToolbarComponent } from './Search-Books-Projects/searchbooks/search-toolbar/search-toolbar.component';
import { SearchSidebarComponent } from './Search-Books-Projects/searchbooks/search-sidebar/search-sidebar.component';
import { SearchbooksModule } from './Search-Books-Projects/searchbooks/searchbooks.module';
import { Extractor } from '@angular/compiler';
import { CustomDecoratorComponent } from './Custom-Classes/custom-decorator/custom-decorator.component';
import { TableComponent } from './Custom-Classes/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDesignsComponent } from './Custom-Classes/custom-designs/custom-designs.component';
import { FormErrorController, filterByName } from './custom-pipes/FormErrorPipe';
import { GamingWebsiteComponent } from './gaming-website/gaming-website.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveProgrammingComponent,
    DynamicTemplateComponent,
    PJModalComponent,
    TimeZoneComponent,
    Children,
    extractPipe,
    FormErrorController,
    filterByName,
    CustomDecoratorComponent,
    TableComponent,
    CustomDesignsComponent,
    GamingWebsiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchbooksModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    PJModalComponent
  ],
  providers: [ProvideInjection],
  bootstrap: [AppComponent]
})
export class AppModule { }
