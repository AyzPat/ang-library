import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// import { slideInDownAnimation } from '../animations';

import { Book, BookService }  from '../book.service';
import { AppService } from '../../app.service';

@Component({
  templateUrl:'./book-detail.html',
  styleUrls:['./book-detail.css','../books.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService,
    private service_app : AppService,
  ) {}

  ngOnInit() {
    this.service_app.breadcrum={name:'Books',url:''}
    this.book$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getBook(params.get('id')));
  }

  gotoBooks(book: Book) {
    let bookId = book ? book.id : null;
    // Pass along the book id if available
    // so that the HeroList component can select that book.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/books', { id: bookId, foo: 'foo' }]);
  }
  next(id){
if(id >= 123 && id < 129)
this.router.navigate(['book/'+id+'',{ id: id }]);
else{
  id = id - 1;
  this.router.navigate(['book/'+id+'', { id: id }]);
  alert('no more next');
}
  }
  prev(id){
    if(id >= 123 && id < 129)
    this.router.navigate(['book/'+id+'', { id: id}]);
    else{
      id = id + 1;
      this.router.navigate(['book/'+id+'', { id: id }]);
      alert('no more previous');
    }
  }
}
