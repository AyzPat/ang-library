// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

import { Book, BookService }  from '../book.service';
import { AppService } from '../../app.service';

@Component({
  templateUrl:'./book-list.html',
  styleUrls:['./book-list.css','../books.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  booksLength:any;
  private selectedId: number;

  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    public service_app:AppService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service_app.breadcrum={name:'Books',url:''}
    this.books$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getBooks();
      });
     this.books$.subscribe(result => {
       this.booksLength = result.length});
  }
  moreClicked(id){
    this.router.navigate(['/books/:id', { id: id, foo: 'foo' }]);
  }
  alert(){
    alert("This adds the new book")
  }
}
