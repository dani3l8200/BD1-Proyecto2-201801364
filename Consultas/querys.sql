use proyecto2;
/*Consulta #1*/
select  pro.nombre as profesional, count(ai.id_invento) invento_asignado
from asg_invento ai 
inner join profesional pro on ai.id_profesional = pro.id_profesional
group by ai.id_profesional 
order by invento_asignado desc;

/*Consulta #2*/
select p.pais, re.region, count(r.id_respuesta) from  pais p
left join pais_respuesta r on p.id_pais = r.id_pais 
left join region re on p.id_region = re.id_region 
group by p.id_pais 
order by  pais asc;
select * from inventor;

/*Consulta #3*/
select distinct p.pais, p.area_km2 from pais p 
left join inventor i on p.id_pais = i.id_pais
left join frontera f on p.id_pais = f.id_pais
left join pais pp on f.check_frontera = pp.id_pais
where i.id_pais is null and pp.id_pais is null
order by p.area_km2 desc;


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
select p.nombre 'Jefe Area', p1.nombre 'Subordinado', a.area 'Area'
from profesional_area pa 
inner join area a on pa.id_area = a.id_area 
inner join jefes_de_area ja on ja.id_area = a.id_area
inner join profesional p on ja.id_profesional = p.id_profesional
inner join profesional p1 on pa.id_profesional = p1.id_profesional
order by 'Jefe Area';

/*Consulta #5*/
create or replace view promedios as select * from
(
select pr.nombre, pr.salario, a.area as promedio, avg(pr.salario) from profesional pr
left join profe_area pa on pr.id_profesional = pa.id_profesional
inner join area a on pa.id_area = a.id_area
group by a.area
order by a.area
) x;

SELECT * from (select (select pr.nombre from promedios where area = a.area and pr.salario > promedio limit 1) as nombre, 
(select pr.salario from promedios where area = a.area and pr.salario > promedio  limit 1) as salario,
(select a.area from promedios where area = a.area and pr.salario > promedio limit 1) as area, 
(select promedio from promedios where area = a.area and pr.salario > promedio  limit 1) as promedio
from profesional pr
left join profe_area pa on pr.id_profesional = pa.id_profesional
inner join area a on pa.id_area = a.id_area) x 
where length(x.nombre) > 0
order by x.area;

/*Consulta 6*/
select p.pais, count(pr.id_respuesta) aciertos from pais_respuesta pr
inner join resp_corr rc on pr.id_respuesta = rc.id_respuesta
inner join pais p on pr.id_pais = p.id_pais 
group by pr.id_pais 
order by aciertos desc; 

/*Consulta 7*/
select inv.nombre invento, prf.nombre profesional, a.area
from profe_area pa 
inner join area a on pa.id_area = a.id_area and a.area = 'Óptica'
inner join profesional prf on pa.id_profesional = prf.id_profesional 
inner join asg_invento ai on ai.id_profesional = prf.id_profesional 
inner join invento inv on ai.id_invento = inv.id_invento 
order by inv.nombre;

/*Consulta 8*/
select substring(pais,1,1) letra, sum(area_km2) area 
from pais 
group by substring(pais,1,1);

/*Consulta 9*/
select inv.nombre inventor, i.nombre invento from inventado imag
right join inventor inv on imag.id_inventor = inv.id_inventor 
inner join invento i on imag.id_invento = i.id_invento 
where inv.nombre like 'BE%';

/*Consulta 10*/
select inv.nombre inventor, i.nombre invento, i.anio_invento from inventado imag
inner join inventor inv on imag.id_inventor = inv.id_inventor
inner join invento i on imag.id_invento = i.id_invento 
where i.anio_invento like '18%' and (inv.nombre like 'B%r' or inv.nombre like 'B%n'); 

/*Consulta 11*/
select p.pais, p.area_km2, count(check_frontera) num_front
from frontera f 
inner join pais p on f.id_pais = p.id_pais
group by f.id_pais 
having count(check_frontera) > 7 
order by p.area_km2 desc;

/*Consulta 12*/
select i.nombre invento from invento i
where i.nombre like 'L___';

/*Consulta 13*/
select nombre, salario, comision, (salario + comision) total 
from profesional 
where comision > (0.25*salario);

/*Consulta 14*/
SELECT e.encuesta, count(pr.id_pais) resp_pais
from pais_respuesta pr
inner join respuesta r on pr.id_respuesta = r.id_respuesta 
inner join pregunta p on r.id_pregunta = p.id_pregunta
inner join encuesta e on p.id_encuesta = e.id_encuesta
group by e.id_encuesta;

/*Consulta 15*/
select p.pais, p.poblacion from pais p 
where p.poblacion > (
	select sum(poblacion) from pais p 
    inner join region r on p.id_region = r.id_region and r.region = 'Centro America'
);

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
/*Consulta 17*/
select nombre, anio_invento from invento 
where anio_invento = (
	select ii.anio_invento from inventado i 
    inner join inventor inv on i.id_inventor = inv.id_inventor
    inner join invento ii on i.id_invento = ii.id_invento
    where inv.nombre = 'Benz'
);

/*Consulta 18*/
select p.pais, p.poblacion from pais p
left join frontera f on p.id_pais = f.id_pais 
where f.check_frontera is null and 
p.area_km2 >= (
	select area_km2 from pais
    where pais = 'Japon'
);

/*Consulta 19*/
select distinct p.pais, pp.pais frontera from frontera f
inner join pais p on f.id_pais = p.id_pais
inner join pais pp on f.check_frontera = pp.id_pais;

/*Consulta 20*/
select nombre, salario, comision 
from profesional 
where salario > (2*comision);