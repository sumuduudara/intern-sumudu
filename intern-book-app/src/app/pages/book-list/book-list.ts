import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../types/book.interface';
import { BookCard } from '../../components/book-card/book-card';
import { MessageService } from '../../services/message';
import { MessagesComponent } from '../../components/messages/messages';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialog } from '../../components/confirm-dialog/confirm-dialog';

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
    MatDialogModule,
    BookCard,
    MessagesComponent,
  ],

  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookListComponent {
  title = '';
  description = '';
  score: number | null = null;
  constructor(
    private dialog: MatDialog,
    public messageService: MessageService,
    private ngZone: NgZone,
  ) {}

  bookList: Book[] = [
    {
      name: 'アンドロイドは電気羊の夢を見るか?',
      detail: '第三次世界大戦後の未来を描いたSF小説。',
      evaluation: 90,
    },
    {
      name: '岩田さん',
      detail: '任天堂の岩田聡さんの仕事哲学をまとめた本。',
      evaluation: 90,
    },
  ];

  addBook(): void {
    if (!this.title.trim() || !this.description.trim() || this.score === null) {
      return;
    }

    this.bookList.unshift({
      name: this.title,
      detail: this.description,
      evaluation: this.score,
    });

    this.messageService.add(`${this.title}を追加しました`);

    this.title = '';
    this.description = '';
    this.score = null;
  }

  deleteBook(index: number): void {
    const dialogRef = this.dialog.open(ConfirmDialog);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.ngZone.run(() => {
          const deletedBook = this.bookList[index];
          this.bookList.splice(index, 1);
          this.messageService.add(`${deletedBook.name}を削除しました`);
        });
      }
    });
  }
}
