create database if not exists proyecto2;
use proyecto2;
drop table temporal3;
drop table temporal2;
drop table temporal1;
create table temporal3(
	nombre_region varchar(100) not null,
    region_padre varchar(100) not null
);
SET @@GLOBAL.local_infile = 1;

LOAD DATA LOCAL INFILE 'C:/Users/luisenriqueroman2001/Desktop/Proyecto2/CargaP-III.csv'
INTO table temporal3
FIELDS terminated by ';' ENCLOSED BY '"'
lines TERMINATED BY '\n'
ignore 1 rows;

create table temporal2(
	nombre_encuesta varchar(150) null,
    pregunta varchar(700) null,
    respuesta_posible varchar(300) null,
    respuesta_correcta varchar(300) null,
    pais varchar(150) null,
    respuesta_pais character null
);
LOAD DATA LOCAL INFILE 'C:/Users/luisenriqueroman2001/Desktop/Proyecto2/CargaP-II.csv'
INTO table temporal2
FIELDS terminated by ';' ENCLOSED BY '"'
lines TERMINATED BY '\n'
ignore 1 rows;
select * from temporal2;

create table temporal1(
	invento varchar(150) null,
    inventor varchar(150) null,
    profesional_asg_al_invento varchar(150) null,
    prof_es_jefe_del_area varchar(150) null,
    fecha_contrato date null,
    salario int null,
    comision int null default 0,
    area_invest_prof varchar(100) null,
    ranking int null,
    anio_invento int null,
    pais_invento varchar(150) null,
    pais_inventor varchar(150) null,
    region_pais varchar(150) null,
    capital varchar(150) null,
    poblacion_pais int null,
    area_km2 int null,
    frontera_con varchar(150) null,
    norte character null,
    sur character null,
    este character null,
    oeste character null
);
LOAD DATA LOCAL INFILE 'C:/Users/luisenriqueroman2001/Desktop/Proyecto2/CargaP-I.csv'
INTO table temporal1
FIELDS terminated by ';' ENCLOSED BY '"'
lines TERMINATED BY '\n'
ignore 1 rows
(invento,inventor,profesional_asg_al_invento,prof_es_jefe_del_area,@fecha_contrato,salario,comision,area_invest_prof,ranking,anio_invento,pais_invento,pais_inventor,region_pais,capital,
poblacion_pais,area_km2,frontera_con,norte,sur,este,oeste)
SET fecha_contrato = STR_TO_DATE(@fecha_contrato, '%d/%m/%Y');
select * from temporal1;