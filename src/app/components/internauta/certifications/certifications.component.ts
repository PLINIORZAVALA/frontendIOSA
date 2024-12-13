import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { CertificationService } from '../../../service/certifications.service';  // Ruta correcta al servicio
import { Certification } from '../../../interfaces/certifications/certifications.interface';  // Ruta correcta a la interface

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  imports: [CommonModule]  // Asegúrate de agregar CommonModule aquí
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];  // Variable para almacenar los datos de las certificaciones
  errorMessage: string = '';            // Variable para manejar errores

  constructor(private certificationService: CertificationService) {}

  ngOnInit(): void {
    this.loadCertifications();  // Llamamos a la función para cargar los datos cuando el componente se inicializa
  }
  
  loadCertifications(): void {
    this.certificationService.getCertifications().subscribe({
      next: (data) => {
        this.certifications = data;  // Asigna los datos a la variable certifications
      },
      error: (err) => {
        this.errorMessage = err.message;  // Si ocurre un error, mostramos el mensaje en la UI
      }
    });
  }
}
