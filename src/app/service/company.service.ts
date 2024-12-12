import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCompany } from '../interfaces/company/create-company.interface';
import { UpdateCompany } from '../interfaces/company/update-company.interface';
import { DeleteCompany } from '../interfaces/company/delete-company.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private _baseUrl = 'http://localhost:3000/'; // Asegúrate de que este sea el URL correcto

  constructor(private http: HttpClient) {}

  // Obtener todas las compañías
  getCompanies(): Observable<CreateCompany[]> {
    return this.http.get<CreateCompany[]>(`${this._baseUrl}api/company/getAll`);
  }

  // Obtener una compañía por ID
  getCompanyById(id: number): Observable<CreateCompany> {
    return this.http.get<CreateCompany>(`${this._baseUrl}api/company/getById/${id}`);
  }

  // Crear una nueva compañía
  postCompany(nuevaCompany: CreateCompany): Observable<CreateCompany> {
    return this.http.post<CreateCompany>(`${this._baseUrl}api/company/create`, nuevaCompany);
  }

  // Actualizar una compañía
  putCompany(id: number, company: UpdateCompany): Observable<CreateCompany> {
    return this.http.put<CreateCompany>(`${this._baseUrl}api/company/update/${id}`, company);
  }

  // Eliminar una compañía
  deleteCompany(id: number): Observable<DeleteCompany> {
    return this.http.delete<DeleteCompany>(`${this._baseUrl}api/company/delete/${id}`);
  }
}