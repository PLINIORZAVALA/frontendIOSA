export interface Certification {
    idCertificare: number;
    nombreCert: string;
    datosCert: string;
    imgCert: string;
    companyId?: number; // Si es necesario incluir la referencia a la compañía
  }
  
  // Para la creación de una certificación
  export interface CreateCertification {
    nombreCert: string;
    datosCert: string;
    imgCert: string;
  }
  
  // Para la actualización de una certificación
  export interface UpdateCertification {
    idCertificare: number;
    nombreCert?: string;
    datosCert?: string;
    imgCert?: string;
  }
  