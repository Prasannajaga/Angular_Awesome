import { TimeZoneComponent } from './time-zone/time-zone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { PJModalComponent } from './pjmodal/pjmodal.component';
import { AppComponent } from './app.component';
import { SearchSidebarComponent } from './Search-Books-Projects/searchbooks/search-sidebar/search-sidebar.component';
import { SearchToolbarComponent } from './Search-Books-Projects/searchbooks/search-toolbar/search-toolbar.component';

const routes: Routes = [
  { path: 'Parent', component: AppComponent  , children : [ 
     {path : "timezone" , component : TimeZoneComponent},
    {path : "DynamicTemplate" , component : DynamicTemplateComponent},
    {path : "pjmodal" , component : PJModalComponent},
  ]},
   {path:"Search/Books", component:SearchToolbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
