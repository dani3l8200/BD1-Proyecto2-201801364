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
    else res.send([{consulta: `select i.nombre invento from invento i
    where i.nombre like 'L___';`}]);
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

app.listen(app.get("port"), "0.0.0.0", () => {
  console.log("Listening on", app.get("port"));
});
