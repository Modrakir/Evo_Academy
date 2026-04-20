import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  imports: [],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetails implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.parent?.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('Текущий параметр маршрута:', id);
    });
  }

  goToList() {
    this.router.navigate(['/item/1/list'], { 
      queryParams: { list: 1, enable: true }
    });
  }
}
