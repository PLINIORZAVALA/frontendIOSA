import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../../service/company.service';
import { CreateCompany } from '../../../interfaces/company/create-company.interface';

@Component({
  selector: 'app-companyInt',
  standalone: true,
  imports: [CommonModule],  // Importa CommonModule
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: CreateCompany[] = [];  // Variable para almacenar los datos de las compañías
  errorMessage: string = '';        // Variable para manejar errores

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanies();  // Llamamos a la función para cargar los datos cuando el componente se inicializa
  }
  
  loadCompanies(): void {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        // console.log('Datos recibidos:', data);  // Verifica los datos en consola
        this.companies = data;  // Asigna los datos a la variable companies
      },
      error: (err) => {
        // console.error('Error al cargar los datos:', err);
        this.errorMessage = err.message;  // Si ocurre un error, mostramos el mensaje en la UI
      }
    });
  }

  getCompanies(imagen: string): string {
    return `home/company/${imagen}`;
  }

  /* 
  getImagePath(nombreImagen: string): string {
    // Asegúrate de que el path sea accesible desde el navegador
    return `images/catalogo/${nombreImagen}`;
  } 
  */
}
