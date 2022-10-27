import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../modele/note';

@Component({
  selector: 'app-note-by-id',
  templateUrl: './note-by-id.component.html',
  styleUrls: ['./note-by-id.component.css'],
})
export class NoteByIdComponent implements OnInit {
  @Input() note: Note = {
    _id: '',
    title: '',
    text: '',
    date: new Date(),
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  updateNote(title: string, text: string) {
    console.log('yes');
    this.http
      .put(`http://localhost:5000/api/notes/${this.note._id}`, {
        title,
        text,
        date: new Date(),
      })
      .subscribe((response) => {
        window.location.reload();
      });
  }
}
