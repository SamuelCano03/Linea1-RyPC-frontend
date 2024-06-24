import { Component, Input } from '@angular/core';
import { CardDetailsDTO } from '../interfaces/card.interface';
import { CardService } from '../services/card.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styles: [``]
})
export class GetComponent {
  // @Input() cards: any;
  cards: CardDetailsDTO[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cardService: CardService
  ){}
  ngOnInit(): void {
    this.cardService.getAllCards().subscribe((data: CardDetailsDTO[]) => {
      this.cards = data;
    });
  }
}