import { Component, OnInit } from '@angular/core';
import { CardAddRequestDTO, CardDetailsDTO } from '../interfaces/card.interface';
import { CardService } from '../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  template: `
    <div class="container">
      <h2>Añade una nueva tarjeta</h2>
      <form [formGroup]="form" (ngSubmit)="addCard()">
        <label for="cardid">Código de la tarjeta:</label>
        <input type="text" id="cardid" formControlName="cardid">
        <div class="button-container">
          <button type="submit">Aceptar</button>
          <button routerLink="..">Volver</button>
        </div>
      </form>
    </div>
  `,
  styles: ``
})
export class AddComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cardService: CardService
  ) {
    this.form = this.fb.group({
      cardid: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
      
  }
  addCard(): void {
    const requestoDTO = {
      cardNumber: this.form.value.cardid
    }
    this.cardService.addCard(requestoDTO).subscribe({
      next: (response) => {
        console.log("hi");
        console.log(response);
        this.router.navigate(['/card/details']);
      },
      error: (err) => {
        console.error(requestoDTO);
        console.error('Error al añadir tarjeta:', err.message);
      },
    });
  }
}
