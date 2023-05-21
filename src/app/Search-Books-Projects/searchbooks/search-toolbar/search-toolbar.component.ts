import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Apiservice } from 'src/app/Services/Apiservice';
 
@Pipe({
  name: "HtmlToText",
})
export class HtmlToPlain implements PipeTransform {

  transform(value: any, ...agrs: any[]): string {
    const data = agrs;
    const temp = document.createElement('div');
    temp.innerHTML = value;
    return temp.innerText || temp.innerHTML || '';
  }

}

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit {
  Books$: any;
  searchText = new Subject<any>();
  loader: string = "";

  constructor(private Api: Apiservice, private Http: HttpClient, private location: Location) { }

  ngOnInit() {
    console.log(this.location.path);

    this.searchText.pipe(
      tap(res => { this.loader = " Loading .........."; }),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(res => {
      this.getBooks(res);
    })
  }

  search(val: string) {
    this.searchText.next(val);
  }

  getBooks(value: string) {
    if(value.trim().length > 0){
    this.Books$ = this.Api.getGoogleBooks(value).pipe(
      map((res: HttpResponse<any>) => {
         return res.body.items;
      })
    );
    }
  }
}
