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

/*Consulta #3*/
select p.pais, p.area_km2 from pais p 
left join inventor i on p.id_pais = i.id_pais
left join frontera f on p.id_pais = f.id_pais
where i.id_pais is null and f.id_pais is null
order by area_km2 desc;

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
