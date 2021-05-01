export class AddPregunta {
  pregunta: string;
  id_encuesta: number;
  constructor(pregunta: string, id_encuesta: number) {
    this.pregunta = pregunta;
    this.id_encuesta = id_encuesta;
  }
}

export class Pregunta {
  id: number;
  pregunta: string;
  encuesta: string;
  constructor(id: number, pregunta: string, encuesta: string) {
    this.id = id;
    this.pregunta = pregunta;
    this.encuesta = encuesta;
  }
}



export class UpdatePregunta {
  pregunta: string;
  id_encuesta: number;
  constructor(pregunta: string, id_encuesta: number) {
    this.pregunta = pregunta;
    this.id_encuesta = id_encuesta;
  }
}
