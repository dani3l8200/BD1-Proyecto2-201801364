DROP PROCEDURE SP_DROPPEARTABLAS;
DROP PROCEDURE SP_CREARTABLAS;
CALL SP_DROPPEARTABLAS();
CALL SP_CREARTABLAS();
DELIMITER $$
CREATE PROCEDURE SP_DROPPEARTABLAS()
	BEGIN
		SET FOREIGN_KEY_CHECKS=0;
		DROP TABLE IF EXISTS profesional;
        DROP TABLE IF EXISTS encuesta;
        DROP TABLE IF EXISTS area;
        DROP TABLE IF EXISTS region;
        DROP TABLE IF EXISTS pais;
        DROP TABLE IF EXISTS frontera;
        DROP TABLE IF EXISTS pregunta;
        DROP TABLE IF EXISTS respuesta;
        DROP TABLE IF EXISTS pais_respuesta;
        DROP TABLE IF EXISTS resp_corr;
        DROP TABLE IF EXISTS invento;
        DROP TABLE IF EXISTS inventor;
        DROP TABLE IF EXISTS inventado;
        DROP TABLE IF EXISTS asg_invento;
        DROP TABLE IF EXISTS profe_area;
        SET FOREIGN_KEY_CHECKS=1;
    END;
$$

DELIMITER $$
CREATE PROCEDURE SP_CREARTABLAS()
	BEGIN 
		create table if not exists profesional (
			id_profesional int not null auto_increment primary key,
			nombre varchar(150) not null,
			fecha_contrato date not null,
			salario int not null,
			comision int
		);


		create table if not exists encuesta(
			id_encuesta int not null auto_increment primary key,
			encuesta varchar(150) not null
		);

		create table if not exists area(
			id_area int not null auto_increment primary key,
			area varchar(150) not null,
			ranking int not null,
			id_profesional int null,
			FOREIGN KEY (id_profesional) REFERENCES profesional(id_profesional)
		);

		CREATE TABLE if not exists region(
			id_region INTEGER AUTO_INCREMENT,
			region VARCHAR(75) NOT NULL,
			region_padre INTEGER,
			CONSTRAINT pk_region PRIMARY KEY (id_region),
			CONSTRAINT fk_region_padre FOREIGN KEY(region_padre) REFERENCES region(id_region)
		);

		create table if not exists pais(
			id_pais int not null auto_increment primary key,
			pais varchar(150) not null,
			capital varchar(150) not null,
			poblacion int not null, 
			area_km2 int not null,
			id_region int, 
			id_continente int,
			FOREIGN KEY (id_region) REFERENCES region(id_region),
			constraint arc_reg check  ( ( ( id_region is not null ) and ( id_continente is null ) )
			or ( ( id_continente is not null ) and ( id_region is null ) ) )
		);

		create table if not exists frontera(
			id_frontera int not null auto_increment primary key,
			norte varchar(1),
			sur varchar(1),
			este varchar(1),
			oeste varchar(1),
			id_pais int not null,
			check_frontera int not null,
			FOREIGN KEY (id_pais) REFERENCES pais(id_pais),
			FOREIGN KEY (check_frontera) REFERENCES pais(id_pais)
		);

		create table if not exists pregunta(
			id_pregunta int not null auto_increment primary key,
			pregunta varchar(500) not null,
			id_encuesta int not null,
			FOREIGN KEY (id_encuesta) REFERENCES encuesta(id_encuesta)
		);

		create table if not exists respuesta(
			id_respuesta int not null auto_increment primary key,
			respuesta varchar(500) not null,
			id_pregunta int not null,
			FOREIGN KEY (id_pregunta) REFERENCES pregunta(id_pregunta)
		);

		create table if not exists pais_respuesta(
			id_pais_respuesta int not null auto_increment primary key,
			id_pais int not null,
			id_respuesta int not null,
			FOREIGN KEY (id_pais) REFERENCES pais(id_pais),
			FOREIGN KEY (id_respuesta) REFERENCES respuesta(id_respuesta)
		);

		create table if not exists resp_corr(
			id_pregunta int not null,
			id_respuesta int not null,
			constraint primary key ( id_pregunta, id_respuesta ),
			FOREIGN KEY (id_pregunta) REFERENCES pregunta(id_pregunta),
			FOREIGN KEY (id_respuesta) REFERENCES respuesta(id_respuesta)
		);

		create table if not exists invento(
			id_invento int not null auto_increment primary key, 
			nombre varchar(150) not null,
			anio_invento int not null,
			id_pais int,
			FOREIGN KEY (id_pais) REFERENCES pais(id_pais)
		);

		create table if not exists inventor(
			id_inventor int not null auto_increment primary key,
			nombre varchar(150) not null,
			id_pais int,
			FOREIGN KEY (id_pais) REFERENCES pais(id_pais)
		);

		create table if not exists inventado(
			id_invento int not null,
			id_inventor int not null,
			constraint primary key (id_invento, id_inventor),
			FOREIGN KEY (id_invento) REFERENCES invento(id_invento),
			FOREIGN KEY (id_inventor) REFERENCES inventor(id_inventor)
		);

		create table if not exists asg_invento(
			id_profesional int not null,
			id_invento int not null ,
			constraint primary key (id_invento, id_profesional),
			FOREIGN KEY (id_invento) REFERENCES invento(id_invento),
			FOREIGN KEY (id_profesional) REFERENCES profesional(id_profesional)
		);

		create table if not exists profe_area(
			id_area int not null,
			id_profesional int not null,
			constraint primary key (id_area, id_profesional),
			FOREIGN KEY (id_area) REFERENCES area(id_area),
			FOREIGN KEY (id_profesional) REFERENCES profesional(id_profesional)
		);
    END;
$$


create or replace view inventoreseasy as select * from (((select distinct SUBSTRING_INDEX(t.inventor,',', 1) as inventores,t.invento from temporal1 t 
inner join pais p on t.pais_inventor = p.pais
where t.inventor != '')
UNION 
(
select distinct SUBSTRING_INDEX(SUBSTRING_INDEX(t.inventor,',', 2),',',-1) as inventores, t.invento from temporal1 t 
inner join pais p on t.pais_inventor = p.pais
where t.inventor != ''
and t.inventor like '%,%'
)
UNION
(
select distinct SUBSTRING_INDEX(t.inventor,',', -1) as inventores, t.invento from temporal1 t 
inner join pais p on t.pais_inventor = p.pais
where t.inventor != ''
and t.inventor like '%,%'
order by inventores asc limit 1
))) as x;