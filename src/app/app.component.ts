import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { CompanyComponent } from './components/admin/company/company.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Indica que este componente es independiente
  imports: [
    CommonModule,  // Asegúrate de importar CommonModule aquí
    CompanyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendIOSA';
}