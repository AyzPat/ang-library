import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
// import { BreadcrumbComponent } from './breadcrum/breadcrum';
import { BookListComponent }    from './book-list/book-list.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';
import { BookService } from './book.service';
import { BookRoutingModule } from './books-routing.module';
import { EllipsisModule } from 'ngx-ellipsis';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule,
    EllipsisModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent
  ],
  providers: [ BookService ]
})
export class BookModule {}
