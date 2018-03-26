// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

import { Author, AuthorService }  from '../author.service';
import { AppService } from '../../app.service';

@Component({
  templateUrl:'./author-list.html',
  styleUrls:['./author-list.css','../authors.css']
})
export class AuthorListComponent implements OnInit {
  authors$: Observable<Author[]>;
  authorsLength:any;
  private selectedId: number;

  constructor(
    private service: AuthorService,
    private route: ActivatedRoute,
    public service_app:AppService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service_app.breadcrum={name:'Authors',url:''}
    this.authors$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getAuthors();
      });
     this.authors$.subscribe(result => {
       this.authorsLength = result.length});
  }
  moreClicked(id){
    this.router.navigate(['/authors/:id', { id: id, foo: 'foo' }]);
  }
  alert(){
    alert("This adds the new author")
  }
}

