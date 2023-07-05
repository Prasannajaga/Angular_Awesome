import { TimeZoneComponent } from './time-zone/time-zone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { PJModalComponent } from './pjmodal/pjmodal.component';
import { AppComponent } from './app.component';
import { SearchSidebarComponent } from './Search-Books-Projects/searchbooks/search-sidebar/search-sidebar.component';
import { SearchToolbarComponent } from './Search-Books-Projects/searchbooks/search-toolbar/search-toolbar.component';
import { CustomDecoratorComponent } from './Custom-Classes/custom-decorator/custom-decorator.component';
import { CustomDesignsComponent } from './Custom-Classes/custom-designs/custom-designs.component';
import { GamingWebsiteComponent } from './gaming-website/gaming-website.component';

const routes: Routes = [
  { path: 'Parent', component: AppComponent  , children : [
     {path : "timezone" , component : TimeZoneComponent},
  ]},

   {path:"Search/Books", component:SearchToolbarComponent},
   {path : "DynamicTemplate" , component : DynamicTemplateComponent},
   {path : "pjmodal" , component : PJModalComponent},
   {path : "customDecorator" , component : CustomDesignsComponent},
   {path : "Games" , component : GamingWebsiteComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
