import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent, SeparatorComponent, ContactComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  alfabet: string = 'abcdefghijklmnopqrstuvwxyz';




}
