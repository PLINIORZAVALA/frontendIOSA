// Interface para un servicio
export interface Service {
    idService: number;
    tipo: string;
    descripcion: string;
    companyId: number; // Se puede usar para asociar un servicio con una empresa
  }
  
  // Interface para la creación de un servicio
  export interface CreateService {
    tipo: string;
    descripcion: string;
  }
  
  // Interface para actualizar un servicio
  export interface UpdateService {
    idService: number;
    tipo?: string;
    descripcion?: string;
  }
  