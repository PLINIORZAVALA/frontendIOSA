import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { CompanyService } from '../../../service/company.service';
import { CreateCompany } from '../../../interfaces/company/create-company.interface';

@Component({
  selector: 'app-company',
  standalone: true,  // Indica que este componente es independiente
  imports: [
    CommonModule  // Asegúrate de importar CommonModule aquí
  ],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: CreateCompany[] = [];  // Variable para almacenar los datos
  errorMessage: string = '';    // Variable para manejar errores

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanies();  // Llamamos a la función para cargar los datos cuando el componente se inicializa
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);  // Agrega este console.log para verificar los datos
        this.companies = data;  // Almacenamos los datos recibidos en la variable companies
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);  // Agrega este console.error para verificar errores
        this.errorMessage = err.message;  // Mostramos el mensaje de error en caso de fallo
      }
    });
  }
}