import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList implements OnInit {
  id = '';
  listParam = '';
  enableParam = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent?.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
    
    this.route.queryParams.subscribe(params => {
      this.listParam = params['list'];
      this.enableParam = params['enable'];
    });
  }
}