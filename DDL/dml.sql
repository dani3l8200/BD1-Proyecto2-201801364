insert into profesional (nombre, fecha_contrato, salario, comision)
select distinct profesional_asg_al_invento, fecha_contrato, salario, comision from temporal1 where fecha_contrato > 0;

insert into continente (continente)
select distinct nombre_region from temporal3 where region_padre = ''; 

insert into encuesta(encuesta)
select distinct nombre_encuesta from temporal2;

insert into area(area, ranking) 
select  distinct area_invest_prof, ranking from temporal1 
where area_invest_prof != ''
group by area_invest_prof;

insert into region(region, id_continente)
select t.nombre_region, c.id_continente from temporal3 t
inner join continente c on t.region_padre = c.continente
where t.region_padre != '';

insert into pais (pais, capital, poblacion, area_km2, id_region)
select distinct t.pais_inventor, t.capital, t.poblacion_pais, t.area_km2, r.id_region from temporal1 t, region r 
where  t.region_pais = r.region and
r.id_region is not null;

insert into pais(pais, capital, poblacion, area_km2, id_continente)
select distinct t.pais_inventor, t.capital, t.poblacion_pais, t.area_km2, c.id_continente from temporal1 t, continente c
where t.region_pais = c.continente and
c.id_continente is not null;

insert into frontera(id_pais, check_frontera, norte, sur, este, oeste)
select distinct p.id_pais, f.id_pais as frontera, t.norte, t.sur, t.este, t.oeste
from temporal1 t
inner join pais p on t.pais_inventor = p.pais
inner join pais f on t.frontera_con = f.pais
where frontera_con != '';

insert into pregunta (pregunta, id_encuesta) 
select distinct t.pregunta, en.id_encuesta from temporal2 t, encuesta en
where en.encuesta = t.nombre_encuesta;

insert into respuesta (id_pregunta,respuesta) 
select distinct p.id_pregunta, t.respuesta_posible from temporal2 t, pregunta p
where p.pregunta = t.pregunta;

insert into pais_respuesta(id_pais, id_respuesta)
select p.id_pais, r.id_respuesta from temporal2 t
inner join pais p on t.pais = p.pais
inner join pregunta pre on t.pregunta = pre.pregunta 
inner join respuesta r on t.respuesta_pais = substring(r.respuesta,1,1) and r.id_pregunta = pre.id_pregunta;

insert into resp_corr (id_pregunta, id_respuesta) 
select distinct p.id_pregunta, r.id_respuesta from temporal2 t, pregunta p, respuesta r
where t.pregunta = p.pregunta 
and r.respuesta = t.respuesta_correcta
and t.respuesta_correcta <> '' 
group by t.pregunta;

insert into invento(nombre, anio_invento, id_pais) 
select distinct t.invento, t.anio_invento, p.id_pais from temporal1 t
inner join pais p on t.pais_invento = p.pais
where t.invento <> '';

insert into inventor (nombre, id_pais)
((select distinct SUBSTRING_INDEX(t.inventor,',', 1) as inventores,p.id_pais from temporal1 t 
inner join pais p on t.pais_inventor = p.pais
where t.inventor != '')
UNION 
(
select distinct SUBSTRING_INDEX(SUBSTRING_INDEX(t.inventor,',', 2),',',-1) as inventores, p.id_pais from temporal1 t 
inner join pais p on t.pais_inventor = p.pais
where t.inventor != ''
and t.inventor like '%,%'
)
UNION
(
select distinct SUBSTRING_INDEX(t.inventor,',', -1) as inventores, p.id_pais from temporal1 t 
inner join pais p on t.pais_inventor = p.pais
where t.inventor != ''
and t.inventor like '%,%'
order by inventores asc limit 1
));

insert into inventado(id_invento, id_inventor)
select distinct i.id_invento, pro.id_inventor from  inventoreseasy t
inner join invento i on t.invento = i.nombre
inner join inventor pro on t.inventores = pro.nombre and pro.id_pais = i.id_pais;

insert into asg_invento(id_profesional, id_invento)
select distinct p.id_profesional, i.id_invento from temporal1 t
inner join invento i on t.invento = i.nombre
inner join profesional p on t.profesional_asg_al_invento = p.nombre;

insert into profe_area(id_profesional, id_area)
select distinct p.id_profesional, a.id_area from temporal1 t 
inner join profesional p on t.profesional_asg_al_invento = p.nombre
inner join area a on t.area_invest_prof = a.area;



