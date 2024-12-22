import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule si es standalone
import { ServiceService } from '../../../service/service.service'; // Ruta al servicio
import { Service } from '../../../interfaces/services/service.interface';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  imports: [CommonModule], // Si el componente es standalone
})
export class ServiceComponent implements OnInit {
  services: Service[] = []; // Lista completa de servicios
  errorMessage: string = ''; // Variable para manejar errores

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.loadServices(); // Cargar los servicios al inicializar el componente
  }

  loadServices(): void {
    this.serviceService.getServices().subscribe({
      next: (data) => {
        // Asignar datos y generar la ruta de las imágenes
        this.services = data.map((service) => ({
          ...service,
          img: this.getImagePath(service.img), // Generar ruta completa para la imagen
        }));
      },
      error: (err) => {
        this.errorMessage = err.message; // Manejar errores
      },
    });
  }

  getImagePath(nombreImagen: string): string {
    // Generar ruta para las imágenes
    return `home/company/${nombreImagen}`;
  }
}