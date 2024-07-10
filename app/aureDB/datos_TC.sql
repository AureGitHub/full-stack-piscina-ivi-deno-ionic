delete from public."TC_UserRole";
INSERT INTO public."TC_UserRole" values(1,'god');
INSERT INTO public."TC_UserRole" values(2,'admin');
INSERT INTO public."TC_UserRole" values(3,'normal');

delete from public."TC_MovimientoTipo";
INSERT INTO public."TC_MovimientoTipo" values(1,'reintegro');
INSERT INTO public."TC_MovimientoTipo" values(2,'ingreso');
INSERT INTO public."TC_MovimientoTipo" values(3,'ganado');
INSERT INTO public."TC_MovimientoTipo" values(4,'inicial');
 
delete from public."TC_UserEstado";
INSERT INTO public."TC_UserEstado" values(1,'activo');
INSERT INTO public."TC_UserEstado" values(2,'baja');
INSERT INTO public."TC_UserEstado" values(3,'bloqueado');
INSERT INTO public."TC_UserEstado" values(4,'cambiar_pass');

delete from public."TC_BizumEstado";
INSERT INTO public."TC_BizumEstado" values(1,'pendiente');
INSERT INTO public."TC_BizumEstado" values(2,'confirmado');
INSERT INTO public."TC_BizumEstado" values(3,'cerrado');

delete from public."TC_ApuestaEstado";
INSERT INTO public."TC_ApuestaEstado" values(1,'abierta');
INSERT INTO public."TC_ApuestaEstado" values(2,'cerrada');
INSERT INTO public."TC_ApuestaEstado" values(3,'finalizada');

delete from public."TC_Auditoria";
INSERT INTO public."TC_Auditoria" values(1,'Acceso');
INSERT INTO public."TC_Auditoria" values(2,'Apuestas');
INSERT INTO public."TC_Auditoria" values(3,'Movimientos');



