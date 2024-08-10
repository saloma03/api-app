import { Component } from '@angular/core';
import { ProductlistComponent } from "../productlist/productlist.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carrasol',
  standalone: true,
  imports: [ProductlistComponent , NgClass],
  templateUrl: './carrasol.component.html',
  styleUrl: './carrasol.component.css'
})
export class CarrasolComponent {
  chosenCategory:string = 'men\'s clothing';

}
