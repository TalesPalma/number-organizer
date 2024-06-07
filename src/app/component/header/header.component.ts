import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import {
  MatDialog,
} from '@angular/material/dialog'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  srcImage = "assets/goku.svg"
  buttonDisable = false;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
    });
  }

  startEfects() {
    this.buttonDisable = true;
    let audio = new Audio();
    audio.src = 'assets/saiyan.mp3';
    audio.load();
    audio.play();
    this.srcImage = "assets/goku-transform.svg"
    console.log("teste")
  }

}
