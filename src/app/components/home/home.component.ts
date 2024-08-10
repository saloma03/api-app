import { Component } from '@angular/core';
import { FeatureitemComponent } from "../featureitem/featureitem.component";
import { Feature } from '../../core/feature';
import { ProductlistComponent } from "../productlist/productlist.component";
import { CarrasolComponent } from "../carrasol/carrasol.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeatureitemComponent, ProductlistComponent, CarrasolComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features:Feature[] = [
    {
      image:'./assets/features/f1.png',
      text: 'Lorem ipsum dolor sit amet.'
    },
    {
      image:'./assets/features/f2.png',
      text: 'Lorem ipsum dolor sit amet.'
    },
    {
      image:'./assets/features/f3.png',
      text: 'Lorem ipsum dolor sit amet.'
    },
    {
      image:'./assets/features/f4.png',
      text: 'Lorem ipsum dolor sit amet.'
    },
    {
      image:'./assets/features/f5.png',
      text: 'Lorem ipsum dolor sit amet.'
    },
    {
      image:'./assets/features/f6.png',
      text: 'Lorem ipsum dolor sit amet.'
    },
  ]
}
