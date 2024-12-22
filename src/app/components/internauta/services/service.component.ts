import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule si es un componente standalone
import { ServiceService } from '../../../service/service.service';  // Ruta al servicio
import { Service } from '../../../interfaces/services/service.interface';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  imports: [CommonModule]  // Si el componente es standalone, asegúrate de importar CommonModule
})
export class ServiceComponent implements OnInit {
  services: Service[] = [];  // Variable para almacenar los servicios
  errorMessage: string = ''; // Variable para manejar los errores

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.loadServices();  // Llamamos a la función para cargar los servicios cuando el componente se inicializa
  }

  loadServices(): void {
    this.serviceService.getServices().subscribe({
      next: (data) => {
        this.services = data;  // Asigna los datos de servicios a la variable
      },
      error: (err) => {
        this.errorMessage = err.message;  // Maneja los errores y muestra el mensaje
      }
    });
  }
}
