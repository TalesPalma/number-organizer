import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private elementRef: ElementRef) { }
  closeDialog() {

  }



}
