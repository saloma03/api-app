import { Component, Input } from '@angular/core';
import { Feature } from '../../core/feature';

@Component({
  selector: 'app-featureitem',
  standalone: true,
  imports: [],
  templateUrl: './featureitem.component.html',
  styleUrl: './featureitem.component.css'
})
export class FeatureitemComponent {
  @Input() imageSrc!:string;
  @Input() text!:string;

}
