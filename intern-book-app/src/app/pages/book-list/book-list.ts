import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookListComponent {
  books = [
    {
      title: 'name',
      description: 'detail'
    },
    {
      title: '坊ちゃん',
      description: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。'
    }
  ];

  deleteBook(index: number) {
    this.books.splice(index, 1);
  }
}