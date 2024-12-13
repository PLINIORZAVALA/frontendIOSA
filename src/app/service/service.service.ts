import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateService, UpdateService, Service} from '../interfaces/services/service.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private _baseUrl = 'http://localhost:3000/service';  // Asegúrate de que esta URL sea la correcta

  constructor(private http: HttpClient) {}

  // Obtener todos los servicios
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this._baseUrl);
  }

  // Obtener un servicio por ID
  getServiceById(id: number): Observable<Service> {
    return this.http.get<Service>(`${this._baseUrl}/${id}`);
  }

  // Crear un nuevo servicio
  postService(nuevoService: CreateService): Observable<Service> {
    return this.http.post<Service>(this._baseUrl, nuevoService);
  }

  // Actualizar un servicio
  putService(id: number, service: UpdateService): Observable<Service> {
    return this.http.put<Service>(`${this._baseUrl}/${id}`, service);
  }

  // Eliminar un servicio
  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this._baseUrl}/${id}`);
  }
}
