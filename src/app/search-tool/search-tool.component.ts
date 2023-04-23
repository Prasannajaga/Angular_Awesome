import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Pipe  , PipeTransform} from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Apiservice } from 'src/app/Services/Apiservice';
import { Location } from '@angular/common';

@Pipe({
  name : "HtmlToText",
})
export class HtmlToPlain implements PipeTransform{

  transform(value: any,...agrs : any[]) : string {
   const data = agrs;
   console.log(data);


    const temp = document.createElement('div');
    temp.innerHTML = value;
    return temp.innerText || temp.innerHTML || '';
   }

}

@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.scss'],
})
export class SearchToolComponent implements OnInit {

  Books$: any;
  searchText = new Subject<any>();
  loader: string = "";

  constructor(private Api: Apiservice, private Http: HttpClient , private location : Location) { }

  ngOnInit() {
  console.log(this.location.path());

    this.searchText.pipe(
      tap(res => { this.loader = " Loading .........."; }),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(res => {
      this.getBooks(res);
    })
  }

  search(val: string) {
    console.log(val);

    this.searchText.next(val);
  }

  getBooks(value: string) {
    this.Books$ = this.Api.getGoogleBooks(value).pipe(
      map((res: HttpResponse<any>) => {
        return res.body.items;
      })
    );

  }

}
