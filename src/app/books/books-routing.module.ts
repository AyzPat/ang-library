import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent }    from './book-list/book-list.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';

const heroesRoutes: Routes = [
  { path: 'books', redirectTo: '/books' },
  { path: 'book/:id', redirectTo: '/books/:id',pathMatch:'prefix' },
  { path: 'books',  component: BookListComponent,},
  // { path: ':id',redirectTo:'books/:id',pathMatch:'prefix'},
  { path: 'books/:id', component: BookDetailComponent,data: {
    breadcrumb: "Details"
  }, }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRoutingModule { }
