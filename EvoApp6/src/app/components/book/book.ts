import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Books } from '../../books';

@Component({
  selector: 'app-book',
  imports: [JsonPipe],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  constructor(
    public bookServ: Books
  ) {}
}
