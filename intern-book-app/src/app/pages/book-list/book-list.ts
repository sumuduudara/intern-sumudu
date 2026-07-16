import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface Book {
  title: string;
  description: string;
  score: number;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookListComponent {

  title = '';
  description = '';
  score: number | null = null;

  books: Book[] = [
    {
      title: 'アンドロイドは電気羊の夢を見るか?',
      description: '第三次世界大戦後の未来を描いたSF小説。',
      score: 90,
    },
    {
      title: '岩田さん',
      description: '任天堂の岩田聡さんの仕事哲学をまとめた本。',
      score: 90,
    },
  ];

  logs: string[] = [
    '坊ちゃんを追加しました',
    '徒然草を削除しました',
    '徒然草を参照しました',
  ];

  addBook(): void {

    if (
      !this.title.trim() ||
      !this.description.trim() ||
      this.score === null
    ) {
      return;
    }

    this.books.unshift({
      title: this.title,
      description: this.description,
      score: this.score,
    });

    this.logs.unshift(`${this.title}を追加しました`);

    this.title = '';
    this.description = '';
    this.score = null;
  }

  deleteBook(index: number): void {

    const deleted = this.books[index];

    this.books.splice(index, 1);

    this.logs.unshift(`${deleted.title}を削除しました`);
  }

}