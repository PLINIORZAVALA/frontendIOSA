import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certification, CreateCertification, UpdateCertification } from '../interfaces/certifications/certifications.interface';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  private _baseUrl = 'http://localhost:3000/certificare'; // Ruta base para las solicitudes al backend

  constructor(private http: HttpClient) {}

  // Obtener todas las certificaciones
  getCertifications(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this._baseUrl);
  }

  // Obtener una certificación por ID
  getCertificationById(id: number): Observable<Certification> {
    return this.http.get<Certification>(`${this._baseUrl}/${id}`);
  }

  // Crear una nueva certificación
  postCertification(nuevaCertification: CreateCertification): Observable<Certification> {
    return this.http.post<Certification>(this._baseUrl, nuevaCertification);
  }

  // Actualizar una certificación
  putCertification(id: number, certification: UpdateCertification): Observable<Certification> {
    return this.http.put<Certification>(`${this._baseUrl}/${id}`, certification);
  }

  // Eliminar una certificación
  deleteCertification(id: number): Observable<void> {
    return this.http.delete<void>(`${this._baseUrl}/${id}`);
  }
}
