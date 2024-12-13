export interface Quote {
    idQuote: number;
    nombre: string;
    apellido: string;
    tipoDePersona: string;
    email: string;
    telefono: string;
  }
  
  export interface CreateQuote {
    nombre: string;
    apellido: string;
    tipoDePersona: string;
    email: string;
    telefono: string;
  }
  
  export interface UpdateQuote {
    nombre?: string;
    apellido?: string;
    tipoDePersona?: string;
    email?: string;
    telefono?: string;
  }
  