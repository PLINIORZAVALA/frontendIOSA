import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog, CreateCatalog, UpdateCatalog } from '../interfaces/catalog/catalog.interface';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private _baseUrl = 'http://localhost:3000/catalog';  // URL del backend para los catálogos

  constructor(private http: HttpClient) {}

  // Obtener todos los catálogos
  getCatalogs(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this._baseUrl);
  }

  // Obtener un catálogo por ID
  getCatalogById(id: number): Observable<Catalog> {
    return this.http.get<Catalog>(`${this._baseUrl}/${id}`);
  }

  // Crear un nuevo catálogo
  postCatalog(nuevoCatalogo: CreateCatalog): Observable<Catalog> {
    return this.http.post<Catalog>(this._baseUrl, nuevoCatalogo);
  }

  // Actualizar un catálogo
  putCatalog(id: number, catalogo: UpdateCatalog): Observable<Catalog> {
    return this.http.put<Catalog>(`${this._baseUrl}/${id}`, catalogo);
  }

  // Eliminar un catálogo
  deleteCatalog(id: number): Observable<void> {
    return this.http.delete<void>(`${this._baseUrl}/${id}`);
  }
}
