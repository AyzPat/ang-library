import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
// import { BreadcrumbComponent } from './breadcrum/breadcrum';
import { AuthorListComponent }    from './author-list/author-list.component';
import { AuthorDetailComponent }  from './author-detail/author-detail.component';
import { AuthorService } from './author.service';
import { AuthorRoutingModule } from './authors-routing.module';
import { EllipsisModule } from 'ngx-ellipsis';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthorRoutingModule,
    EllipsisModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  declarations: [
    AuthorListComponent,
    AuthorDetailComponent
  ],
  providers: [ AuthorService ]
})
export class AuthorModule {}
