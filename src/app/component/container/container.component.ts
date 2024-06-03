import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, SeparatorComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  alfabet: string = 'abcdefghijklmnopqrstuvwxyz';




}
