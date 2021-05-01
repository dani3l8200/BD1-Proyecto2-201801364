const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
let app = express();

let conexion = mysql.createConnection({
  host: "0.0.0.0",
  user: "root",
  password: "JuanAnonymo2000@",
  database: "proyecto2",
});

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

/***********************************************************CONSULTAS*************************************************************/
app.get("/consulta1", (req, res) => {
  const query = "CALL CONSULTA1();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta2", (req, res) => {
  const query = "CALL CONSULTA2();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta3", (req, res) => {
  const query = "CALL CONSULTA3();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta4", (req, res) => {
  const query = "CALL CONSULTA4();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta5", (req, res) => {
  const query = "CALL CONSULTA5();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta6", (req, res) => {
  const query = "CALL CONSULTA6();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta7", (req, res) => {
  const query = "CALL CONSULTA7();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta8", (req, res) => {
  const query = "CALL CONSULTA8();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta9", (req, res) => {
  const query = "CALL CONSULTA9();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta10", (req, res) => {
  const query = "CALL CONSULTA10();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta11", (req, res) => {
  const query = "CALL CONSULTA11();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta12", (req, res) => {
  const query = "CALL CONSULTA12();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else
      res.send([
        {
          consulta: `select i.nombre invento from invento i
    where i.nombre like 'L___';`,
        },
      ]);
  });
});

app.get("/consulta13", (req, res) => {
  const query = "CALL CONSULTA13();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta14", (req, res) => {
  const query = "CALL CONSULTA14();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta15", (req, res) => {
  const query = "CALL CONSULTA15();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta16", (req, res) => {
  const query = "CALL CONSULTA16();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta17", (req, res) => {
  const query = "CALL CONSULTA17();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta18", (req, res) => {
  const query = "CALL CONSULTA18();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta19", (req, res) => {
  const query = "CALL CONSULTA19();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});

app.get("/consulta20", (req, res) => {
  const query = "CALL CONSULTA20();";
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result[0]);
  });
});
/******************************************************************************************************************************/
/************************************************************CRUD**************************************************************/
app.post("/addFrontera", (req, res) => {
  const id_pais = req.body.id_pais;
  const check_frontera = req.body.check_frontera;
  const norte = req.body.norte;
  const sur = req.body.sur;
  const este = req.body.este;
  const oeste = req.body.oeste;
  const query = `insert into frontera(id_pais, check_frontera, norte, sur, este, oeste) 
  values ('${id_pais}', '${check_frontera}', '${norte}', '${sur}', '${este}', '${oeste}');`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/getFronteras", (req, res) => {
  const query = `select fr.id_frontera, p.id_pais, p.pais, pp.id_pais as id_frontera_pais,
  pp.pais as frontera, fr.sur, fr.norte, fr.este, fr.oeste from frontera fr
  inner join pais p on p.id_pais = fr.id_pais
  inner join pais pp on pp.id_pais = fr.check_frontera
  order by fr.id_frontera;`;
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result);
  });
});

app.delete("/removeFrontera/:id_frontera", (req, res) => {
  const id_frontera = req.params.id_frontera;
  const query = `delete from frontera where id_frontera = '${id_frontera}';`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.put("/updateFronteras/:id_frontera", (req, res) => {
  const id_frontera = req.params.id_frontera;
  const id_pais = req.body.id_pais;
  const check_frontera = req.body.check_frontera;
  const norte = req.body.norte;
  const sur = req.body.sur;
  const este = req.body.este;
  const oeste = req.body.oeste;
  const query = `update frontera set id_pais = '${id_pais}', check_frontera = '${check_frontera}', 
  norte = '${norte}', sur = '${sur}', este = '${este}', oeste = '${oeste}' 
  where id_frontera = '${id_frontera}';`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/addPais", (req, res) => {
  const pais = req.body.pais;
  const capital = req.body.capital;
  const poblacion = req.body.poblacion;
  const area_km2 = req.body.area_km2;
  const id_region = req.body.id_region;
  const query = `insert into pais (pais, capital, poblacion, area_km2, id_region) values('${pais}','${capital}', ${poblacion}, ${area_km2}, ${id_region});`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/getPaises", (req, res) => {
  const query = `select p.id_pais as id, p.pais, p.capital, p.poblacion, p.area_km2, r.id_region, r.region from pais p 
  inner join region r on p.id_region = r.id_region
  order by p.id_pais asc;`;
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result);
  });
});

app.delete("/removePais/:id_pais", (req, res) => {
  const id_pais = req.params.id_pais;

  const query = `delete from pais where id_pais = '${id_pais}'`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.put("/updatePais/:id_pais", (req, res) => {
  const id_pais = req.params.id_pais;
  const pais = req.body.pais;
  const capital = req.body.capital;
  const poblacion = req.body.poblacion;
  const area_km2 = req.body.area_km2;
  const id_region = req.body.id_region;
  const query = `update pais set pais = '${pais}', capital = '${capital}', poblacion = '${poblacion}', area_km2 = '${area_km2}', id_region = '${id_region}' where id_pais = '${id_pais}'`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/addPregunta", (req, res) => {
  const pregunta = req.body.pregunta;
  const id_encuesta = req.body.id_encuesta;
  const query = `insert into pregunta (pregunta, id_encuesta) values('${pregunta}','${id_encuesta}');`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/getPreguntas", (req, res) => {
  const query = `select p.id_pregunta as id, p.pregunta, en.encuesta from pregunta p 
  inner join encuesta en on p.id_encuesta = en.id_encuesta
  order by p.id_pregunta asc;`;
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result);
  });
});

app.delete("/removePregunta/:id_pregunta", (req, res) => {
  const id_pregunta = req.params.id_pregunta;

  const query = `delete from pregunta where id_pregunta = '${id_pregunta}'`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.put("/updatePregunta/:id_pregunta", (req, res) => {
  const id_pregunta = req.params.id_pregunta;
  const pregunta = req.body.pregunta;
  const id_encuesta = req.body.id_encuesta;
  const query = `update pregunta set pregunta = '${pregunta}', id_encuesta = '${id_encuesta}' where id_pregunta = '${id_pregunta}'`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/getInventores", (req, res) => {
  const query = `select i.id_invento, i.nombre as invento, i.anio_invento,inv.id_inventor, inv.nombre as inventor,p.pais from inventado ii
  inner join invento i on i.id_invento = ii.id_invento
  inner join inventor inv on inv.id_inventor = ii.id_inventor
  inner join pais p on p.id_pais = i.id_pais
  order by i.id_invento asc;`;
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result);
  });
});

app.put("/updateInventos", (req, res) => {
  const id_invento = req.body.id_invento;
  const inventor = req.body.inventor;
  const invento = req.body.invento;
  const anio_invento = req.body.anio_invento;
  const id_inventor = req.body.id_inventor;
  let query = `update inventor set nombre = '${inventor}' where id_inventor = '${id_inventor}'`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      query = `update invento set nombre = '${invento}', anio_invento = '${anio_invento}' where id_invento = '${id_invento}'`;
      conexion.query(query, (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log(result);
          res.send(result);
        }
      });
    }
  });
});

app.get("/getRespuestas", (req, res) => {
  const query = `select p.id_pregunta as id, p.pregunta, r.id_respuesta, r.respuesta from resp_corr res 
  inner join pregunta p on p.id_pregunta = res.id_pregunta
  inner join respuesta r on r.id_respuesta = res.id_respuesta
  order by p.id_pregunta asc;`;
  conexion.query(query, (err, result) => {
    if (err) throw err;
    else res.send(result);
  });
});

app.put("/updateRespuesta/:id_pregunta", (req, res) => {
  const id_pregunta = req.params.id_pregunta;
  const id_respuesta = req.body.id_respuesta;
  const query = `update resp_corr set id_respuesta = '${id_respuesta}' where id_pregunta = '${id_pregunta}';`;
  conexion.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
/******************************************************************************************************************************/
app.listen(app.get("port"), "0.0.0.0", () => {
  console.log("Listening on", app.get("port"));
});
