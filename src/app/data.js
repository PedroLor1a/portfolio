export const projects = [
  {
    id: "web_comercio",
    title: "Arriba Comercio",
    category: "Gestión financiera",
    type: "Sistemas",
    number: "01",
    accent: "lime",
    description:
      "Una plataforma que conecta comercios con su operación financiera. Créditos, cobranzas, documentación y reportes en un mismo lugar.",
    stack: ["Next.js", "React", "Material UI", "Node.js", "SQL"],
    features: [
      "Gestión de créditos y cobranzas",
      "Reportes exportables en Excel y PDF",
      "Documentación y operación por comercio",
    ],
    label: "COMMERCE / FINTECH",
  },
  {
    id: "mt-electrodomesticos",
    title: "MT Electrodomésticos",
    category: "Gestión de préstamos y cartera",
    type: "Sistemas",
    number: "02",
    accent: "purple",
    description:
      "Un sistema para administrar clientes, productos y préstamos de electrodomésticos. Centraliza el seguimiento de créditos y cuotas, los recordatorios y los reportes, con importación desde Excel y filtros para gestionar la cartera.",
    stack: ["Next.js", "React", "Material UI", "Node.js", "PostgreSQL", "SWR", "Excel"],
    features: [
      "Administración de clientes, productos, créditos y cuotas",
      "Importación masiva desde Excel y filtros de cartera",
      "Recordatorios y seguimiento de clientes",
      "Reportes y control de permisos",
    ],
    label: "CREDIT / MANAGEMENT",
  },
  {
    id: "web-comercio-tareas",
    title: "Microfrontend de Tareas",
    category: "Gestión de tareas · Arriba Comercio",
    type: "Microfrontends",
    number: "03",
    accent: "blue",
    description:
      "Microfrontend full stack utilizado en Arriba Comercio para organizar tareas y coordinar el trabajo por proyecto. Integra su propia interfaz y backend bajo /tareas, compartiendo el inicio de sesión con la plataforma principal y sincronizando actualizaciones en tiempo real.",
    stack: [
      "Next.js",
      "React",
      "Material UI",
      "Node.js",
      "MySQL",
      "Redis",
      "Socket.IO",
      "AWS S3",
    ],
    features: [
      "Tableros por proyecto, detalle de tareas y agendamientos",
      "Administración de proyectos, plantillas e importación masiva de tareas",
      "Actualizaciones en tiempo real con Socket.IO y permisos por proyecto",
      "Integración con la sesión y los módulos de Arriba Comercio",
    ],
    label: "TASKS / MICROFRONTEND",
  },
];
export const social = {
  github: "https://github.com/PedroLor1a",
  linkedin: "https://www.linkedin.com/in/pedroloria/",
  cv: "/CV-Pedro-Loria.pdf",
};
