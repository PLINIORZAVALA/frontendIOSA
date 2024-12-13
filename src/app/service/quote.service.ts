import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote, CreateQuote, UpdateQuote } from '../interfaces/quote/quote.interface';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'http://localhost:3000/quote';  // Asegúrate de que esta URL sea la correcta según tu backend

  constructor(private http: HttpClient) {}

  // Obtener todas las cotizaciones
  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }

  // Obtener una cotización por su ID
  getQuote(id: number): Observable<Quote> {
    return this.http.get<Quote>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva cotización
  createQuote(createQuote: CreateQuote): Observable<Quote> {
    return this.http.post<Quote>(this.apiUrl, createQuote);
  }

  // Actualizar una cotización existente
  updateQuote(id: number, updateQuote: UpdateQuote): Observable<Quote> {
    return this.http.put<Quote>(`${this.apiUrl}/${id}`, updateQuote);
  }

  // Eliminar una cotización por su ID
  deleteQuote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
