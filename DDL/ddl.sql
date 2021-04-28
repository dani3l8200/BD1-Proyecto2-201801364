CALL SP_DROPPEARTABLAS();
CALL SP_CREARTABLAS();
DELIMITER $$
CREATE PROCEDURE SP_DROPPEARTABLAS()
	BEGIN
		SET FOREIGN_KEY_CHECKS=0;
		DROP TABLE profesional;
        DROP TABLE continente;
        DROP TABLE encuesta;
        DROP TABLE area;
        DROP TABLE region;
        DROP TABLE pais;
        DROP TABLE frontera;
        DROP TABLE pregunta;
        DROP TABLE respuesta;
        DROP TABLE pais_respuesta;
        DROP TABLE resp_corr;
        DROP TABLE invento;
        DROP TABLE inventor;
        DROP TABLE inventado;
        DROP TABLE asg_invento;
        DROP TABLE profe_area;
        SET FOREIGN_KEY_CHECKS=1;
    END;
$$

DELIMITER $$
CREATE PROCEDURE SP_CREARTABLAS()
	BEGIN 
		create table profesional (
			id_profesional int not null auto_increment primary key,
			nombre varchar(150) not null,
			fecha_contrato date not null,
			salario int not null,
			comision int
		);

		create table continente(
			id_continente int not null auto_increment primary key,
			continente varchar(100) not null
		);

		create table encuesta(
			id_encuesta int not null auto_increment primary key,
			encuesta varchar(150) not null
		);

		create table area(
			id_area int not null auto_increment primary key,
			area varchar(150) not null,
			ranking int not null,
			id_profesional int null,
			FOREIGN KEY (id_profesional) REFERENCES profesional(id_profesional)
		);

		create table region(
			id_region int not null auto_increment primary key,
			region varchar(150) not null,
			id_continente int not null,
			FOREIGN KEY (id_continente) REFERENCES continente(id_continente)
		);

		create table pais(
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

		create table frontera(
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

		create table pregunta(
			id_pregunta int not null auto_increment primary key,
			pregunta varchar(500) not null,
			id_encuesta int not null,
			FOREIGN KEY (id_encuesta) REFERENCES encuesta(id_encuesta)
		);

		create table respuesta(
			id_respuesta int not null auto_increment primary key,
			respuesta varchar(500) not null,
			id_pregunta int not null,
			FOREIGN KEY (id_pregunta) REFERENCES pregunta(id_pregunta)
		);

		create table pais_respuesta(
			id_pais_respuesta int not null auto_increment primary key,
			id_pais int not null,
			id_respuesta int not null,
			FOREIGN KEY (id_pais) REFERENCES pais(id_pais),
			FOREIGN KEY (id_respuesta) REFERENCES respuesta(id_respuesta)
		);

		create table resp_corr(
			id_pregunta int not null,
			id_respuesta int not null,
			constraint primary key ( id_pregunta, id_respuesta ),
			FOREIGN KEY (id_pregunta) REFERENCES pregunta(id_pregunta),
			FOREIGN KEY (id_respuesta) REFERENCES respuesta(id_respuesta)
		);

		create table invento(
			id_invento int not null auto_increment primary key, 
			nombre varchar(150) not null,
			anio_invento int not null,
			id_pais int,
			FOREIGN KEY (id_pais) REFERENCES pais(id_pais)
		);

		create table inventor(
			id_inventor int not null auto_increment primary key,
			nombre varchar(150) not null,
			id_pais int,
			FOREIGN KEY (id_pais) REFERENCES pais(id_pais)
		);

		create table inventado(
			id_invento int not null,
			id_inventor int not null,
			constraint primary key (id_invento, id_inventor),
			FOREIGN KEY (id_invento) REFERENCES invento(id_invento),
			FOREIGN KEY (id_inventor) REFERENCES inventor(id_inventor)
		);

		create table asg_invento(
			id_profesional int not null,
			id_invento int not null ,
			constraint primary key (id_invento, id_profesional),
			FOREIGN KEY (id_invento) REFERENCES invento(id_invento),
			FOREIGN KEY (id_profesional) REFERENCES profesional(id_profesional)
		);

		create table profe_area(
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