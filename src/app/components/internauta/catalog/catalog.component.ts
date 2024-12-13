import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para usar *ngIf y *ngFor
import { CatalogService } from '../../../service/catalog.service';  // Ruta al servicio
import { Catalog } from '../../../interfaces/catalog/catalog.interface';

@Component({
  selector: 'app-catalog',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule],  // Asegúrate de que CommonModule esté importado
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalogs: Catalog[] = [];  // Variable para almacenar los catálogos
  errorMessage: string = ''; // Variable para manejar los errores

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.loadCatalogs();  // Llamamos a la función para cargar los catálogos cuando el componente se inicializa
  }

  loadCatalogs(): void {
    this.catalogService.getCatalogs().subscribe({
      next: (data) => {
        this.catalogs = data;  // Asigna los datos de los catálogos a la variable
      },
      error: (err) => {
        this.errorMessage = err.message;  // Maneja los errores y muestra el mensaje
      }
    });
  }
}
