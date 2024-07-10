SELECT 'INSERT INTO public."Apuesta" '
--|| '(id, fecha, apostado, ganado, estadoid, "createdAt") '
|| ' VALUES (' 
|| id || ',' 
|| '''' ||  mid(nombre,11,4) || '-' || mid(nombre,8,2) || '-' || mid(nombre,5,2)  || ''','
|| apostado || ','
|| ganado || ','
|| '3,'
||  'CURRENT_TIMESTAMP);'
FROM [Apuestas] AS a


SELECT 
'INSERT INTO public."UserXApuesta" VALUES('
|| 'nextval(''"UserXApuesta_id_seq"''::regclass),'
||  Switch(
        id_usu = 0, 135,
        id_usu = 98, 121,
        id_usu != 0 AND id_usu != 98, id_usu 
        ) || ','
 || id_apuesta  
|| ');'
FROM [Apuesta_Jugador] 



