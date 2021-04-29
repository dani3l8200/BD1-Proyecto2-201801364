use proyecto2;
/*Consulta #1*/

DELIMITER $$
CREATE PROCEDURE CONSULTA1()
BEGIN
	select  pro.nombre as profesional, count(ai.id_invento) invento_asignado
	from asg_invento ai 
	inner join profesional pro on ai.id_profesional = pro.id_profesional
	group by ai.id_profesional 
	order by invento_asignado desc;
END;
$$
/*Consulta #2*/

DELIMITER $$
CREATE PROCEDURE CONSULTA2()
BEGIN
	select p.pais, re.region, count(r.id_respuesta) as cantidad from  pais p
	left join pais_respuesta r on p.id_pais = r.id_pais 
	left join region re on p.id_region = re.id_region 
	group by p.id_pais 
	order by  pais asc;
	select * from inventor;
END;
$$
/*Consulta #3*/
DELIMITER $$
CREATE PROCEDURE CONSULTA3()
BEGIN
	select distinct p.pais, p.area_km2 from pais p 
	left join inventor i on p.id_pais = i.id_pais
	left join frontera f on p.id_pais = f.id_pais
	left join pais pp on f.check_frontera = pp.id_pais
	where i.id_pais is null and pp.id_pais is null
	order by p.area_km2 desc;
END;
$$

create or replace view jefes_de_area as select * from ( select distinct 
(select id_profesional from profesional where nombre = t.profesional_asg_al_invento) as id_profesional,
(select id_area from area where area = t.prof_es_jefe_del_area) as id_area
from temporal1 t
where t.invento != '' and t.prof_es_jefe_del_area != '' and t.prof_es_jefe_del_area != 'TODAS')x;

create or replace view profesional_area as select * from (select distinct 
(select id_profesional from profesional where nombre = t.profesional_asg_al_invento) as id_profesional,
(select id_area from area where area = t.area_invest_prof) as id_area
from temporal1 t
where t.invento != '') x;

/*Consulta 4*/

DELIMITER $$
CREATE PROCEDURE CONSULTA4()
BEGIN
	select p.nombre 'JefeArea', p1.nombre 'Subordinado', a.area 'Area'
	from profesional_area pa 
	inner join area a on pa.id_area = a.id_area 
	inner join jefes_de_area ja on ja.id_area = a.id_area
	inner join profesional p on ja.id_profesional = p.id_profesional
	inner join profesional p1 on pa.id_profesional = p1.id_profesional
	order by 'JefeArea';
END;
$$
/*Consulta #5*/
create or replace view promedios as select * from
(
select pr.nombre, pr.salario, a.area as promedio, avg(pr.salario) from profesional pr
left join profe_area pa on pr.id_profesional = pa.id_profesional
inner join area a on pa.id_area = a.id_area
group by a.area
order by a.area
) x;

DELIMITER $$
CREATE PROCEDURE CONSULTA5()
BEGIN
	SELECT * from (select (select pr.nombre from promedios where area = a.area and pr.salario > promedio limit 1) as nombre, 
	(select pr.salario from promedios where area = a.area and pr.salario > promedio  limit 1) as salario,
	(select a.area from promedios where area = a.area and pr.salario > promedio limit 1) as area, 
	(select promedio from promedios where area = a.area and pr.salario > promedio  limit 1) as promedio
	from profesional pr
	left join profe_area pa on pr.id_profesional = pa.id_profesional
	inner join area a on pa.id_area = a.id_area) x 
	where length(x.nombre) > 0
	order by x.area;
END;
$$
/*Consulta 6*/
DELIMITER $$
CREATE PROCEDURE CONSULTA6()
BEGIN
	select p.pais, count(pr.id_respuesta) aciertos from pais_respuesta pr
	inner join resp_corr rc on pr.id_respuesta = rc.id_respuesta
	inner join pais p on pr.id_pais = p.id_pais 
	group by pr.id_pais 
	order by aciertos desc; 
END;
$$
/*Consulta 7*/
DELIMITER $$
CREATE PROCEDURE CONSULTA7()
BEGIN
	select inv.nombre invento, prf.nombre profesional, a.area
	from profe_area pa 
	inner join area a on pa.id_area = a.id_area and a.area = 'Óptica'
	inner join profesional prf on pa.id_profesional = prf.id_profesional 
	inner join asg_invento ai on ai.id_profesional = prf.id_profesional 
	inner join invento inv on ai.id_invento = inv.id_invento 
	order by inv.nombre;
END;
$$
/*Consulta 8*/
DELIMITER $$
CREATE PROCEDURE CONSULTA8()
BEGIN
	select substring(pais,1,1) letra, sum(area_km2) area 
	from pais 
	group by substring(pais,1,1);
END;
$$

/*Consulta 9*/
DELIMITER $$
CREATE PROCEDURE CONSULTA9()
BEGIN
	select inv.nombre inventor, i.nombre invento from inventado imag
	right join inventor inv on imag.id_inventor = inv.id_inventor 
	inner join invento i on imag.id_invento = i.id_invento 
	where inv.nombre like 'BE%';
END;
$$
/*Consulta 10*/
DELIMITER $$
CREATE PROCEDURE CONSULTA10()
BEGIN
	select inv.nombre inventor, i.nombre invento, i.anio_invento from inventado imag
	inner join inventor inv on imag.id_inventor = inv.id_inventor
	inner join invento i on imag.id_invento = i.id_invento 
	where i.anio_invento like '18%' and (inv.nombre like 'B%r' or inv.nombre like 'B%n'); 
END;
$$
/*Consulta 11*/
DELIMITER $$
CREATE PROCEDURE CONSULTA11()
BEGIN
	select p.pais, p.area_km2, count(check_frontera) num_front
	from frontera f 
	inner join pais p on f.id_pais = p.id_pais
	group by f.id_pais 
	having count(check_frontera) > 7 
	order by p.area_km2 desc;
END;
$$
/*Consulta 12*/
DELIMITER $$
CREATE PROCEDURE CONSULTA12()
BEGIN 
	select i.nombre invento from invento i
	where i.nombre like 'L___';
END;
$$
/*Consulta 13*/
DELIMITER $$
CREATE PROCEDURE CONSULTA13()
BEGIN
	select nombre, salario, comision, (salario + comision) total 
	from profesional 
	where comision > (0.25*salario);
END;
$$
/*Consulta 14*/
DELIMITER $$
CREATE PROCEDURE CONSULTA14()
BEGIN
	SELECT e.encuesta, count(pr.id_pais) resp_pais
	from pais_respuesta pr
	inner join respuesta r on pr.id_respuesta = r.id_respuesta 
	inner join pregunta p on r.id_pregunta = p.id_pregunta
	inner join encuesta e on p.id_encuesta = e.id_encuesta
	group by e.id_encuesta;
END;
$$
/*Consulta 15*/
DELIMITER $$
CREATE PROCEDURE CONSULTA15()
BEGIN
	select p.pais, p.poblacion from pais p 
	where p.poblacion > (
		select sum(poblacion) from pais p 
		inner join region r on p.id_region = r.id_region and r.region = 'Centro America'
	);
END;
$$

/*Consulta 16*/
create or replace view c1 as select * from (
(select distinct p.id_profesional as id_profesional, a.id_area, 0 is_jefe 
from temporal1 t 
inner join profesional p on p.nombre = t.profesional_asg_al_invento
inner join area a on a.area = t.area_invest_prof
where t.area_invest_prof != '')
UNION 
(select distinct p.id_profesional as id_profesional, a.id_area, 1 is_jefe 
from temporal1 t 
inner join profesional p on p.nombre = t.profesional_asg_al_invento
inner join area a on a.area = t.prof_es_jefe_del_area
where t.prof_es_jefe_del_area != '')
) x; 

create or replace view c2 as select * from (
select * from c1 
UNION
(select distinct p.id_profesional as id_profesional, a.id_area, 1 is_jefe 
from temporal1 t 
inner join profesional p on p.nombre = t.profesional_asg_al_invento,
area a 
where t.prof_es_jefe_del_area = 'TODAS' and 
not exists (select * from c1 where id_profesional = p.id_profesional and id_area = a.id_area))
) x;

DELIMITER $$
CREATE PROCEDURE CONSULTA16()
BEGIN
select p.nombre, a.area from c2 pa 
inner join profesional p on pa.id_profesional = p.id_profesional
inner join area a on a.id_area = pa.id_area
where pa.is_jefe = 1 and
a.area != (
	select a.area from profesional p
    inner join asg_invento ai on p.id_profesional = ai.id_profesional
    inner join invento i on i.id_invento = ai.id_invento
    inner join inventado inve on inve.id_invento = i.id_invento
    inner join inventor inv on inv.id_inventor = inve.id_inventor
    inner join c2 pa on pa.id_profesional = p.id_profesional
    inner join area a on a.id_area = pa.id_area
    where inv.nombre = 'Pasteur'
);
END;
$$
/*Consulta 17*/
DELIMITER $$
CREATE PROCEDURE CONSULTA17()
BEGIN
	select nombre, anio_invento from invento 
	where anio_invento = (
		select ii.anio_invento from inventado i 
		inner join inventor inv on i.id_inventor = inv.id_inventor
		inner join invento ii on i.id_invento = ii.id_invento
		where inv.nombre = 'Benz'
	);
END;
$$
/*Consulta 18*/
DELIMITER $$
CREATE PROCEDURE CONSULTA18()
BEGIN
	select p.pais, p.poblacion from pais p
	left join frontera f on p.id_pais = f.id_pais 
	where f.check_frontera is null and 
	p.area_km2 >= (
		select area_km2 from pais
		where pais = 'Japon'
	);
END;
$$

/*Consulta 19*/
DELIMITER $$
CREATE PROCEDURE CONSULTA19()
BEGIN
select distinct p.pais, pp.pais frontera from frontera f
inner join pais p on f.id_pais = p.id_pais
inner join pais pp on f.check_frontera = pp.id_pais;
END;
$$

/*Consulta 20*/
DELIMITER $$
CREATE PROCEDURE CONSULTA20()
BEGIN
	select nombre, salario, comision 
	from profesional 
	where salario > (2*comision);
END;
$$

CALL CONSULTA1();
CALL CONSULTA2();
CALL CONSULTA3();
CALL CONSULTA4();
CALL CONSULTA5();
CALL CONSULTA6();
CALL CONSULTA7();
CALL CONSULTA8();
CALL CONSULTA9();
CALL CONSULTA10();
CALL CONSULTA11();
CALL CONSULTA12();
CALL CONSULTA13();
CALL CONSULTA14();
CALL CONSULTA15();
CALL CONSULTA16();
CALL CONSULTA17();
CALL CONSULTA18();
CALL CONSULTA19();
CALL CONSULTA20();
CALL CONSULTA20();