import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  imageUrl: string = "/assets/goku.svg"
  isTransform!: boolean;


  mudarImage() {
    if (!this.isTransform) {
      this.imageUrl = "/assets/goku-transform.svg";
      this.isTransform = true;
    } else {
      this.imageUrl = "/assets/goku.svg";
      this.isTransform = false;
    }
  }

}
