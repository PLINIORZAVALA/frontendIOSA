export interface CreateCompany {
  idCompany: number;
  nombre: string;
  telefono: string;  // Asegúrate de que estos campos existan en la interfaz
  email: string;     // Asegúrate de que estos campos existan en la interfaz
  descripcion: string;
  imagen: string;
  empleados: number;
  proyectos: number;
  experiencia: number;
  certificares: any[];
  tecnologias: any[];
  services: any[];
  catalogs: any[];
  quotes: any[];
}