import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }
}
