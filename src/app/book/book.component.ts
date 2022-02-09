import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;
  myBooks: { bookid: number; bookname: any; author: any; }[] = [];
  bookArray: boolean;

  constructor(public _book: BookService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      'bookid': new FormControl(null, [Validators.required]),
      'bookname': new FormControl(null, [Validators.required]),
      'author': new FormControl(null),
    });
  }

  onPushBook() {
    const bookObj = this.bookForm.value;
    //
    const bookid = this.bookForm.get('bookid').value;
    const bookname = this.bookForm.get('bookname').value;
    const author = this.bookForm.get('author').value;

    // this.myBooks.push({
    //   bookid: bookid,
    //   bookname: bookname,
    //   author: author,
    // });  -- Book Array --

    this.myBooks.push(bookObj);

    // reset fields
    this.bookForm.reset();
  }

  onSave() {
    this._book.saveBook(this.myBooks)
      .subscribe({
        next: sub => { console.log(sub); },
        error: error => { console.log(error); },
      });

    // reset fields
    this.bookForm.reset();
  }

  onGet() {
    this._book.getBook()
      .subscribe({
        next: sub => { console.log(sub); },
        error: err => { console.log(err); },
      });

    // reset fields
    this.bookForm.reset();
  }
}
