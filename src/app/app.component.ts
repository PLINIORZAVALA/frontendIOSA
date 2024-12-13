import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

//Internauta
import { CompanyComponent } from './components/internauta/company/company.component';
import { CertificationsComponent } from './components/internauta/certifications/certifications.component';
import { ServiceComponent } from './components/internauta/services/service.component';
import { CatalogComponent } from './components/internauta/catalog/catalog.component';
import { QuoteComponent } from './components/internauta/quote/quote.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Indica que este componente es independiente
  imports: [
    CommonModule,  // Asegúrate de importar CommonModule aquí
    CompanyComponent,  // Importa el componente CompanyComponentInt
    CertificationsComponent,
    ServiceComponent,
    CatalogComponent,
    QuoteComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  // Implementa OnInit
  title = 'frontendIOSA';

  ngOnInit(): void {
    // Código que deseas ejecutar cuando el componente se inicializa
    console.log('AppComponent inicializado');
  }
}