export class Answer {
  id: number;
  pregunta: string;
  respuesta: string;
  id_respuesta: number
  constructor(id: number, pregunta: string, respuesta: string, id_respuesta:number) {
    this.id = id;
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.id_respuesta = id_respuesta;
  }
}

export class UpdateAnswer {
  id_respuesta: number;
  constructor(id_respuesta: number) {
    this.id_respuesta = id_respuesta;
  }
}

export class UpdateInventos {
  id_invento: number;
  inventor: string;
  invento: string;
  anio_invento: number;
  id_inventor: number;
  constructor(
    id_invento: number,
    inventor: string,
    invento: string,
    anio_invento: number,
    id_inventor: number
  ) {
    this.id_invento = id_invento;
    this.inventor = inventor;
    this.invento = invento;
    this.anio_invento = anio_invento;
    this.id_inventor = id_inventor;
  }
}

export class Inventos {
  id_invento: number;
  invento: string;
  anio_invento: number;
  id_inventor: number;
  inventor: string;
  pais: string;
  constructor(
    id_invento: number,
    invento: string,
    anio_invento: number,
    id_inventor: number,
    inventor: string,
    pais: string
  ) {
    this.id_invento = id_invento;
    this.invento = invento;
    this.anio_invento = anio_invento;
    this.id_inventor = id_inventor;
    this.inventor = inventor;
    this.pais = pais;
  }
}
