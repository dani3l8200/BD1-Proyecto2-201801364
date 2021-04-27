insert into pregunta (pregunta, id_encuesta) 
select distinct t.pregunta, en.id_encuesta from temporal2 t, encuesta en
where en.encuesta = t.nombre_encuesta;

insert into respuesta (id_pregunta,respuesta) 
select distinct p.id_pregunta, t.respuesta_posible from temporal2 t, pregunta p
where p.pregunta = t.pregunta;

insert into resp_corr (id_pregunta, id_respuesta) 
select distinct p.id_pregunta, r.id_respuesta from temporal2 t, pregunta p, respuesta r
where t.pregunta = p.pregunta 
and r.respuesta = t.respuesta_correcta
and t.respuesta_correcta <> '' 
group by t.pregunta;
