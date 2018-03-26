import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface Author {
  id: number,
  author: string,
  age: number,
  gender: string,
  bornIn:string,
  books:Array<{id: number,name:string,desc:string,isbn:string}>,
}

const Authors = [
  {
    id: 123,
    author: 'Philip K. Dick ',
    age: 23,
    gender: 'Male',
    bornIn:'USA',
    books:[
      {id:1,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:2,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:3,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:4,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
    ]
  },
  {
    id: 124,
    author: 'Mark M ',
    age: 27,
    gender: 'Male',
    bornIn:'India',
    books:[
      {id:1,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:2,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:3,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:4,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
    ]
  },
  {
    id: 125,
    author: 'John K ',
    age: 27,
    gender: 'Male',
    bornIn:'UK',
    books:[
      {id:1,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:2,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:3,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:4,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
    ]
  },
  {
    id: 126,
    author: 'Maria W ',
    age: 30,
    gender: 'Female',
    bornIn:'India',
    books:[
      {id:1,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:2,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:3,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:4,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
    ]

  },
  {
    id: 127,
    author: 'Sarah J ',
    age: 21,
    gender: 'Female',
    bornIn:'USA',
    books:[
      {id:1,name:'Pride and Prejudice and Zombies',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      isbn:'ISBN - 9348-8459-287-74',},
      {id:2,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:3,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:4,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
    ]
  },
  {
    id: 128,
    author: 'Adam M ',
    age: 20,
    gender: 'Male',
    bornIn:'India',
    books:[
      {id:1,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:2,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:3,name:'Pride and Prejudice and Zombies',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:4,name:'Do Androids Dream of Electric Sheep?',
      isbn:'ISBN - 9348-8459-287-74',
      desc:'It was January 2021, and Rick Deckard Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
    ]
  }

];

@Injectable()
export class AuthorService {
  getAuthors() { return Observable.of(Authors); }

  getAuthor(id: number | string) {
    return this.getAuthors()
      // (+) before `id` turns the string into a number
      .map(authors => authors.find(author => author.id === +id));
  }
}
