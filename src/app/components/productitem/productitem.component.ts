import { Product } from '../../core/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productitem',
  standalone: true,
  imports: [],
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.css'
})
export class ProductitemComponent implements OnInit{
  @Input() product!:Product;
  ratingNumber !: number;
  ratingN: number[] = [];
  ngOnInit(): void {
    this.ratingNumber =  Math.round(this.product.rating.rate);
    this.ratingN = Array.from({ length: this.ratingNumber }, (_, i) => i + 1);

  }
}
