import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  imports: [],
  templateUrl: './inline.html',
  styleUrl: './inline.css',
})
export class Inline implements OnInit{
  constructor(
    private title: Title,
    private meta: Meta
  ){}
  ngOnInit(): void {
    this.title.setTitle('Open Graph Page');
    this.meta.addTag({ property: 'og:title', content: 'The Rock' });
    this.meta.addTag({ property: 'og:type', content: 'video.movie' });
    this.meta.addTag({ property: 'og:url', content: '//www.imdb.com/title/tt0117500/' });
  }
}
