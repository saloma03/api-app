import { Product } from '../../core/product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductitemComponent } from '../productitem/productitem.component';
import { ProductserviceService } from '../../core/productservice.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [ProductitemComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
    @Input() category:string = "clothes";
    constructor(private _ProductserviceService:ProductserviceService ){
    }
    products!:Product[];
    ngOnInit(): void {
        this._ProductserviceService.getProduct().subscribe(
          {
            next:(res)=>{
              this.products = res;
          },
            error:(err)=>{
              console.log(err);
          },
          }

        )
    }

}
