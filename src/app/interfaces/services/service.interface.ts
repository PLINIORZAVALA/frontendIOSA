// Interface para un servicio
export interface Service {
  idService: number;
  tipo: string;
  img: string;
  descripcion: string;
  companyId: number; 
}

// Interface para la creación de un servicio
export interface CreateService {
  tipo: string;
  descripcion: string;
  img: string;
}

// Interface para actualizar un servicio
export interface UpdateService {
  idService: number;
  img?: string;
  tipo?: string;
  descripcion?: string;
}