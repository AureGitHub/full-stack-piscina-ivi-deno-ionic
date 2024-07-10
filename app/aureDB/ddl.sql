-- DROP SCHEMA public;

DROP TABLE IF EXISTS public."cartaCategoria";
DROP TABLE IF EXISTS public."CartaOpcion";
DROP TABLE IF EXISTS public."User";
DROP TABLE IF EXISTS public."TC_UserRole";
DROP TABLE IF EXISTS public."TC_UserEstado";


-- DROP TABLE public."TC_UserEstado";

CREATE TABLE public."TC_UserEstado" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_UserEstado_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_UserEstado_descripcion_key" ON public."TC_UserEstado" USING btree (descripcion);


-- public."TC_UserRole" definition

-- Drop table

-- DROP TABLE public."TC_UserRole";

CREATE TABLE public."TC_UserRole" (
	id int4 NOT NULL,
	descripcion text NOT NULL,
	CONSTRAINT "TC_UserRole_pkey" PRIMARY KEY (id)
);
CREATE UNIQUE INDEX "TC_UserRole_descripcion_key" ON public."TC_UserRole" USING btree (descripcion);


-- public."cartaCategoria" definition

-- Drop table

-- DROP TABLE public."cartaCategoria";

CREATE TABLE public."cartaCategoria" (
	id serial4 NOT NULL,
	titulo text NOT NULL,
	incluir bool DEFAULT false NOT NULL,
	orden int4 NOT NULL,
	CONSTRAINT cartacategoria_pkey PRIMARY KEY (id)
);


-- public."CartaOpcion" definition

-- Drop table

-- DROP TABLE public."CartaOpcion";

CREATE TABLE public."CartaOpcion" (
	id serial4 NOT NULL,
	titulo text NOT NULL,
	descripcion text NOT NULL,
	disponible bool DEFAULT false NOT NULL,
	precio numeric(9, 2) NOT NULL,
	orden int4 NOT NULL,
	cartacategoriaid int4 NOT NULL,
	CONSTRAINT cartaopcion_pkey PRIMARY KEY (id),
	CONSTRAINT "CartaOpcion_cartacategoriaid_fkey" FOREIGN KEY (cartacategoriaid) REFERENCES public."cartaCategoria"(id) ON DELETE SET NULL ON UPDATE CASCADE
);


-- public."User" definition

-- Drop table

-- DROP TABLE public."User";

CREATE TABLE public."User" (
	id int4 NOT NULL,
	"name" text NOT NULL,
	email text NOT NULL,
	"password" text NOT NULL,
	estadoid int4 NOT NULL,
	roleid int4 NOT NULL,
	CONSTRAINT "User_pkey" PRIMARY KEY (id),
	CONSTRAINT "User_estadoid_fkey" FOREIGN KEY (estadoid) REFERENCES public."TC_UserEstado"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT "User_roleid_fkey" FOREIGN KEY (roleid) REFERENCES public."TC_UserRole"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);