import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BreadcrumbComponent} from './breadcrum/breadcrum'
import { Router } from '@angular/router';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { BookModule }            from './books/books.module';
import { AuthorModule }            from './author/authors.module';
import { AppService } from './app.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BookModule,
    AuthorModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    BreadcrumbComponent
  ],
  providers: [AppService],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
