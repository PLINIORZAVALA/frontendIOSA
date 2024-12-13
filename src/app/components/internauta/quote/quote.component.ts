import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'; // Asegúrate de que esta importación esté presente

import { QuoteService } from '../../../service/quote.service';
import { CreateQuote } from '../../../interfaces/quote/quote.interface';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false; // Control de estado de carga
  nuevoQuote: CreateQuote = {
    nombre: '',
    apellido: '',
    tipoDePersona: '',
    email: '',
    telefono: '',
  };

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {}

  // Método para crear una nueva cotización
  crearCotizacion(): void {
    if (this.isLoading) return;
    this.isLoading = true;

    // Verificación básica de los campos
    if (!this.nuevoQuote.nombre || !this.nuevoQuote.apellido || !this.nuevoQuote.tipoDePersona || !this.nuevoQuote.email || !this.nuevoQuote.telefono) {
      this.errorMessage = 'Por favor, completa todos los campos antes de crear la cotización.';
      this.successMessage = '';
      this.isLoading = false;
      return;
    }

    // Llamada al servicio para crear la cotización
    this.quoteService.createQuote(this.nuevoQuote).subscribe({
      next: (response) => {
        this.successMessage = 'Cotización creada con éxito';
        this.errorMessage = '';
        this.nuevoQuote = { nombre: '', apellido: '', tipoDePersona: '', email: '', telefono: '' }; // Limpiar formulario
      },
      error: (err) => {
        console.error('Error al crear cotización:', err);
        this.errorMessage = 'Hubo un error al crear la cotización. Intenta nuevamente.';
        this.successMessage = '';
      }
    });
    this.isLoading = false;
  }
}
