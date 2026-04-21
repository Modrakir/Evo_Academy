import { Component, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  constructor(
    private meta: Meta,
    private title: Title
  ) {}
  ngOnInit(): void {
    this.meta.addTag({ name:'og:desc', content: 'root_desc' })
    this.title.setTitle('Desk Page')
  }
}
