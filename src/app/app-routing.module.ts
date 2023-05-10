import { TimeZoneComponent } from './time-zone/time-zone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchToolComponent } from './search-tool/search-tool.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { PJModalComponent } from './pjmodal/pjmodal.component';

const routes: Routes = [

  {path : "search" , component : SearchToolComponent},
  {path : "timezone" , component : TimeZoneComponent},
  {path : "DynamicTemplate" , component : DynamicTemplateComponent},
  {path : "pjmodal" , component : PJModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
