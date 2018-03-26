import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorListComponent }    from './author-list/author-list.component';
import { AuthorDetailComponent }  from './author-detail/author-detail.component';

const heroesRoutes: Routes = [
  { path: 'authors', redirectTo: '/authors' },
  { path: 'author/:id', redirectTo: '/authors/:id',pathMatch:'prefix' },
  { path: 'authors',  component: AuthorListComponent,},
  // { path: ':id',redirectTo:'authors/:id',pathMatch:'prefix'},
  { path: 'authors/:id', component: AuthorDetailComponent,data: {
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
export class AuthorRoutingModule { }
