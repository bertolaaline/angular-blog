import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = "./../../../assets/img/aline.png"
  contentTitle: string = "Meus Artigos"
  contentDescription: string = "Olá Mundo!"
}


