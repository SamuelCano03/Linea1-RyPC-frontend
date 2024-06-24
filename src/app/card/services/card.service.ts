import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardAddRequestDTO, CardDetailsDTO, CardBlockRequestDTO } from '../interfaces/card.interface';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private http = inject(HttpClient);
    
    getAllCards(): Observable<CardDetailsDTO[]> {
        return this.http.get<CardDetailsDTO[]>(environment.apiUrl+'/card/details');
    }
    addCard(cardAddRequestDTO: CardAddRequestDTO): Observable<CardDetailsDTO> {
        return this.http.put<CardDetailsDTO>(environment.apiUrl+'/card/add', cardAddRequestDTO);
    }
    blockCard(cardBlockRequestDTO: CardBlockRequestDTO): Observable<CardDetailsDTO> {
        return this.http.put<CardDetailsDTO>(environment.apiUrl+'/card/block', cardBlockRequestDTO);
    }

}
