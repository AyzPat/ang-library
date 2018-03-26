import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Author, AuthorService }  from '../author.service';
import { AppService } from '../../app.service';

@Component({
  templateUrl:'./author-detail.html',
  styleUrls:['./author-detail.css','../authors.css']
})
export class AuthorDetailComponent implements OnInit {

  author$: Observable<Author>;
  booksLength:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthorService,
    private service_app : AppService,
  ) {}

  ngOnInit() {
    this.service_app.breadcrum={name:'Authors',url:'/author'}
    this.author$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getAuthor(params.get('id')));
        this.author$.subscribe(result => {
          this.booksLength = result.books.length});
  }

  gotoAuthors(author: Author) {
    let authorId = author ? author.id : null;
    this.router.navigate(['/authors', { id: authorId, foo: 'foo' }]);
  }
  next(id){
if(id >= 123 && id < 129)
this.router.navigate(['author/'+id+'',{ id: id }]);
else{
  id = id - 1;
  this.router.navigate(['author/'+id+'', { id: id }]);
  alert('no more next');
}
  }
  prev(id){
    if(id >= 123 && id < 129)
    this.router.navigate(['author/'+id+'', { id: id}]);
    else{
      id = id + 1;
      this.router.navigate(['author/'+id+'', { id: id }]);
      alert('no more previous');
    }
  }
}
