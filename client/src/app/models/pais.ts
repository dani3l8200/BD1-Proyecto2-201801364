export class AddFrontera {
  id_pais: number;
  check_frontera: number;
  norte: string;
  sur: string;
  este: string;
  oeste: string;
  constructor(
    id_pais: number,
    check_frontera: number,
    norte: string,
    sur: string,
    este: string,
    oeste: string
  ) {
    this.id_pais = id_pais;
    this.check_frontera = check_frontera;
    this.norte = norte;
    this.sur = sur;
    this.este = este;
    this.oeste = oeste;
  }
}

export class Frontera {
  id_frontera: number;
  id_pais: number;
  pais: string;
  id_frontera_pais: number;
  frontera: string;
  norte: string;
  sur: string;
  este: string;
  oeste: string;
  constructor(
    id_frontera: number,
    id_pais: number,
    pais: string,
    id_frontera_pais: number,
    frontera: string,
    norte: string,
    sur: string,
    este: string,
    oeste: string
  ) {
    this.id_frontera = id_frontera;
    this.id_pais = id_pais;
    this.pais = pais;
    this.id_frontera_pais = id_frontera_pais;
    this.frontera = frontera;
    this.norte = norte;
    this.sur = sur;
    this.este = este;
    this.oeste = oeste;
  }
}

export class AddPais {
  pais: string;
  capital: string;
  poblacion: number;
  area_km2: number;
  id_region: number;
  constructor(
    pais: string,
    capital: string,
    poblacion: number,
    area_km2: number,
    id_region: number
  ) {
    this.pais = pais;
    this.capital = capital;
    this.poblacion = poblacion;
    this.area_km2 = area_km2;
    this.id_region = id_region;
  }
}

export class Pais {
  id: number;
  pais: string;
  capital: string;
  poblacion: number;
  area_km2: number;
  id_region: number;
  region: string;
  constructor(
    id: number,
    pais: string,
    capital: string,
    poblacion: number,
    area_km2: number,
    id_region: number,
    region: string
  ) {
    this.id = id;
    this.pais = pais;
    this.capital = capital;
    this.poblacion = poblacion;
    this.area_km2 = area_km2;
    this.id_region = id_region
    this.region = region;
  }
}
