import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../modele/note';

@Component({
  selector: 'app-note-creater',
  templateUrl: './note-creater.component.html',
  styleUrls: ['./note-creater.component.css'],
})
export class NoteCreaterComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(title: string, text: string) {
    const Note: Note = {
      _id: '',
      title: title,
      text: text,
      date: new Date(),
    };
    // post note to server and handle response (error or success)
    this.http
      .post('http://localhost:5000/api/notes', Note)
      .subscribe((response) => {
        window.location.reload();
      });
  }
}
