import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('myDialog') dialog!: ElementRef;
  @ViewChild('myButton') button!: ElementRef;

  imageUrl: string = "/assets/goku.svg"

  onClickButton() {
    this.dialog.nativeElement.show();
  }



}
