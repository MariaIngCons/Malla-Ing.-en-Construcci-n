// script.js
const malla = [
  {
    nivel: "Nivel I",
    ramos: [
      { id: "calculo1", nombre: "Cálculo I", abre: ["calculo2", "topografia"] },
      { id: "algebra", nombre: "Álgebra", abre: [] },
      { id: "quimica", nombre: "Química de los Materiales", abre: ["hormigon"] },
      { id: "fundamentos", nombre: "Fund. Ing. en Construcción", abre: ["hormigon", "madera"] },
      { id: "interpretacion", nombre: "Interp. Técnica y Espacial", abre: ["planos"] },
      { id: "electivo1", nombre: "Electivo Formación General I", abre: ["electivo2"] },
      { id: "ingles1", nombre: "Inglés Principiante", abre: ["ingles2"] }
    ]
  },
  {
    nivel: "Nivel II",
    ramos: [
      { id: "calculo2", nombre: "Cálculo II", prereq: ["calculo1"], abre: ["calculo3", "ecdif"] },
      { id: "fisica1", nombre: "Física I", abre: ["fisica2", "fisica3"] },
      { id: "hormigon", nombre: "Técn. Hormigón y Mortero", prereq: ["quimica", "fundamentos"], abre: ["procesos1"] },
      { id: "madera", nombre: "Tecnología de la Madera", prereq: ["fundamentos"] },
      { id: "planos", nombre: "Inst. de planos y EETT", prereq: ["interpretacion"], abre: ["bim"] },
      { id: "electivo2", nombre: "Electivo Formación General II", prereq: ["electivo1"], abre: ["electivo3"] },
      { id: "ingles2", nombre: "Inglés Básico", prereq: ["ingles1"], abre: ["ingles3"] }
    ]
  },
  {
    nivel: "Nivel III",
    ramos: [
      { id: "calculo3", nombre: "Cálculo III", prereq: ["calculo2"], abre: ["estadistica"] },
      { id: "ecdif", nombre: "Ec. Diferenciales", prereq: ["calculo2"] },
      { id: "fisica2", nombre: "Física II", prereq: ["fisica1"], abre: ["fisica3"] },
      { id: "procesos1", nombre: "Procesos Constructivos I", prereq: ["hormigon"], abre: ["procesos2"] },
      { id: "bim", nombre: "Modelamiento Información para la Construcción", prereq: ["planos"] },
      { id: "ingles3", nombre: "Inglés Pre-Intermedio", prereq: ["ingles2"], abre: ["ingles4"] }
    ]
  },
  {
    nivel: "Nivel IV",
    ramos: [
      { id: "estadistica", nombre: "Estadística Aplicada", prereq: ["calculo3"] },
      { id: "fisica3", nombre: "Física III", prereq: ["fisica1", "fisica2"], abre: ["suelos1"] },
      { id: "topografia", nombre: "Topografía", prereq: ["calculo1"], abre: ["topoobras"] },
      { id: "empresa1", nombre: "Gestión de Empresa I", abre: ["empresa2"] },
      { id: "procesos2", nombre: "Procesos Constructivos II", prereq: ["procesos1"], abre: ["instalaciones"] },
      { id: "electivo3", nombre: "Electivo Formación General III", prereq: ["electivo2"], abre: ["electivo4"] }
    ]
  },
  {
    nivel: "Nivel V",
    ramos: [
      { id: "estructura1", nombre: "Estructura I (Análisis Est.)", abre: ["estructura2", "estructura3"] },
      { id: "suelos1", nombre: "Méc. de Suelos I", prereq: ["fisica3"], abre: ["suelos2"] },
      { id: "topoobras", nombre: "Topografía de Obras", prereq: ["topografia"], abre: ["procesos3"] },
      { id: "empresa2", nombre: "Gestión de Empresa II", prereq: ["empresa1"] },
      { id: "asfalto", nombre: "Tecnología del Asfalto" },
      { id: "etica", nombre: "Ética Profesional" }
    ]
  },
  {
    nivel: "Nivel VI",
    ramos: [
      { id: "estructura2", nombre: "Estructura II (Mad. y Acero)", prereq: ["estructura1"] },
      { id: "suelos2", nombre: "Méc. de Suelos II", prereq: ["suelos1"] },
      { id: "fluidos", nombre: "Mecánica de Fluidos", abre: ["sanitarias", "hidraulicas"] },
      { id: "procesos3", nombre: "Procesos Constructivos III", prereq: ["topoobras"], abre: ["vial", "gestion1"] },
      { id: "legislacion", nombre: "Legislación Laboral" },
      { id: "instalaciones", nombre: "Instalaciones para la Constr.", prereq: ["procesos2"] }
    ]
  },
  {
    nivel: "Nivel VII",
    ramos: [
      { id: "estructura3", nombre: "Estructuras III (Horm. Arm.)", prereq: ["estructura1"], abre: ["obras"] },
      { id: "sanitarias", nombre: "Obras Sanitarias", prereq: ["fluidos"], abre: ["tallerintegracion"] },
      { id: "gestion1", nombre: "Gestión de Proyecto I", prereq: ["procesos3"], abre: ["gestion2"] },
      { id: "energia", nombre: "Energía y Edificación", abre: ["sustentable"] },
      { id: "electivo4", nombre: "Electivo Formación General IV", prereq: ["electivo3"] },
      { id: "ingles4", nombre: "Inglés Intermedio", prereq: ["ingles3"], abre: ["suficiencia"] }
    ]
  },
  {
    nivel: "Nivel VIII",
    ramos: [
      { id: "obras", nombre: "Obras de Ingeniería", prereq: ["estructura3"] },
      { id: "hidraulicas", nombre: "Obras Hidráulicas", prereq: ["fluidos"] },
      { id: "seguridad", nombre: "Seguridad y Prevención" },
      { id: "gestion2", nombre: "Gestión de Proyecto II", prereq: ["gestion1"], abre: ["tallerintegracion", "tallerlic"] },
      { id: "evaluacion", nombre: "Evaluación de Proyectos" },
      { id: "sustentable", nombre: "Construcción Sustentable", prereq: ["energia"], abre: ["tallerintegracion"] },
      { id: "suficiencia", nombre: "Examen de Suficiencia", prereq: ["ingles4"] }
    ]
  },
  {
    nivel: "Nivel IX",
    ramos: [
      { id: "gestionintegral", nombre: "Gestión Integral de Proyectos" },
      { id: "tallerlic", nombre: "Taller de Propuesta y Lic.", prereq: ["gestion2"] },
      { id: "tallerintegracion", nombre: "Taller Integración Proc. Constr. y Adm. de Obras", prereq: ["sanitarias", "gestion2", "sustentable"] },
      { id: "electivoprof1", nombre: "Electivo de Formación Profesional I" },
      { id: "electivoprof2", nombre: "Electivo de Formación Profesional II" }
    ]
  },
  {
    nivel: "Nivel X",
    ramos: [
      { id: "titulacion", nombre: "Actividad de Titulación", prereq: [
        "calculo1", "calculo2", "calculo3", "ecdif", "fisica1", "fisica2", "fisica3",
        "hormigon", "fundamentos", "quimica", "algebra", "madera", "planos", "bim",
        "procesos1", "procesos2", "procesos3", "topografia", "topoobras", "estructura1",
        "estructura2", "estructura3", "suelos1", "suelos2", "fluidos", "sanitarias",
        "hidraulicas", "obras", "gestion1", "gestion2", "gestionintegral", "etica",
        "evaluacion", "sustentable", "tallerlic", "tallerintegracion"
      ]}
    ]
  }
];

const aprobadoSet = new Set();

function renderMalla() {
  const container = document.getElementById('malla');
  container.innerHTML = '';

  malla.forEach(nivel => {
    const divNivel = document.createElement('div');
    divNivel.className = 'nivel';

    const titulo = document.createElement('h2');
    titulo.textContent = nivel.nivel;
    divNivel.appendChild(titulo);

    nivel.ramos.forEach(ramo => {
      const divRamo = document.createElement('div');
      divRamo.className = 'ramo';
      divRamo.textContent = ramo.nombre;
      divRamo.dataset.id = ramo.id;

      const prereqs = ramo.prereq || [];
      const bloqueado = prereqs.some(p => !aprobadoSet.has(p));

      if (bloqueado) {
        divRamo.classList.add('bloqueado');
      } else if (aprobadoSet.has(ramo.id)) {
        divRamo.classList.add('aprobado');
      }

      divRamo.addEventListener('click', () => {
        if (divRamo.classList.contains('bloqueado')) return;

        if (divRamo.classList.contains('aprobado')) {
          aprobadoSet.delete(ramo.id);
        } else {
          aprobadoSet.add(ramo.id);
        }

        renderMalla();
      });

      divNivel.appendChild(divRamo);
    });

    container.appendChild(divNivel);
  });
}

renderMalla();

