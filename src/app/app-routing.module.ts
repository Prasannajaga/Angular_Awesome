import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchToolComponent } from './search-tool/search-tool.component';

const routes: Routes = [

  {path : "search" , component : SearchToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
