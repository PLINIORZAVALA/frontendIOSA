import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCompany } from '../interfaces/company/create-company.interface';
import { UpdateCompany } from '../interfaces/company/update-company.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private _baseUrl = 'http://localhost:3000/company'; // Ruta base para las solicitudes al backend

  constructor(private http: HttpClient) {}

  // Obtener todas las compañías
  getCompanies(): Observable<CreateCompany[]> {
    return this.http.get<CreateCompany[]>(this._baseUrl);
  }

  // Obtener una compañía por ID
  getCompanyById(id: number): Observable<CreateCompany> {
    return this.http.get<CreateCompany>(`${this._baseUrl}/${id}`);
  }

  // Crear una nueva compañía
  postCompany(nuevaCompany: CreateCompany): Observable<CreateCompany> {
    return this.http.post<CreateCompany>(this._baseUrl, nuevaCompany);
  }

  // Actualizar una compañía
  putCompany(id: number, company: UpdateCompany): Observable<CreateCompany> {
    return this.http.put<CreateCompany>(`${this._baseUrl}/${id}`, company);
  }

  // Eliminar una compañía
  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this._baseUrl}/${id}`);
  }
}
