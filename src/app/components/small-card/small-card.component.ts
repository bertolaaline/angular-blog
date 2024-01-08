import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input()
  photoCover: string = "https://dz2cdn1.dzone.com/storage/temp/12195624-1.png"

  @Input()
  cardTitle: string = " Saiu a nova versão do Agular"
  
}
