export interface Catalog {
    idCatalog: number;
    nombre: string;
    descripcion: string;
    imagen: string;
  }
  
  export interface CreateCatalog {
    nombre: string;
    descripcion: string;
    imagen: string;
  }
  
  export interface UpdateCatalog {
    nombre?: string;
    descripcion?: string;
    imagen?: string;
  }
  