import { Component, OnInit } from '@angular/core';
import { CardAddRequestDTO, CardDetailsDTO } from '../interfaces/card.interface';
import { CardService } from '../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { P } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-block',
  template: `
    <div class="container">
      <h2>Bloquea una tarjeta</h2>
      <form [formGroup]="form" (ngSubmit)="blockCard()">
        <label for="cardid">Código de la tarjeta:</label>
        <input type="text" id="cardid" formControlName="cardid">

        <label for="password">Tu contraseña:</label>
        <input type="password" id="password" formControlName="password">
        <div class="button-container">
          <button type="submit">Bloquear</button>
          <button routerLink="..">Volver</button>
        </div>
      </form>
    </div>
  `,
  styles: ``
})
export class BlockComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cardService: CardService
  ) {
    this.form = this.fb.group({
      cardid: ['', [Validators.required]],
      password: ['', [Validators.required]] 
    });
  }
  ngOnInit(): void {
      
  }
  blockCard(): void {
    const requestoDTO = {
      cardNumber: this.form.value.cardid,
      password: this.form.value.password
    }
    this.cardService.blockCard(requestoDTO).subscribe({
      next: (response) => {
        console.log("hi");
        console.log(response);
        this.router.navigate(['/card/details']);
      },
    });
  }
}