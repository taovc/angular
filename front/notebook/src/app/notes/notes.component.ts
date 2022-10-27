import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../modele/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  isopen = false;
  notes: Note[] = [];
  currentNote: Note = {
    _id: '',
    title: '',
    text: '',
    date: new Date(),
  };

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000/api/notes').subscribe((response) => {
      this.notes.push(...(response as Note[]));
    });
  }

  ngOnInit(): void {}
  showBody(note: any) {
    if (!this.isopen) {
      this.isopen = true;
      this.currentNote = note;
    }
  }
  removeNote(id: string) {
    if (confirm('Are you sure you want to delete this note?')) {
      this.http
        .delete(`http://localhost:5000/api/notes/${id}`)
        .subscribe((response) => {
          this.notes = this.notes.filter((note) => note._id !== id);
        });
    }
  }
}
