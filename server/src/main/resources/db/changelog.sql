--DROP SCHEMA public;
--
--CREATE SCHEMA public AUTHORIZATION pg_database_owner;

--COMMENT ON SCHEMA public IS 'standard public schema';
-- public.answers definition

-- Drop table

-- DROP TABLE answers;

CREATE TABLE answers (
	student_id int4 NULL,
	add_data date NULL,
	text_p text NULL,
	text_a text NULL,
	grade float4 NULL,
	id_teachers int4 NULL,
	id_subject int4 NULL,
	id int4 NOT NULL,
	CONSTRAINT answers_pkey PRIMARY KEY (id)
);


-- public."comments" definition

-- Drop table

-- DROP TABLE "comments";

CREATE TABLE "comments" (
	id_student int4 NULL,
	id_answer int4 NULL,
	comment_text text NULL,
	id int4 NOT NULL,
	CONSTRAINT comments_pk PRIMARY KEY (id)
);


-- public.grades definition

-- Drop table

-- DROP TABLE grades;

CREATE TABLE grades (
	id_student int4 NULL,
	id_answer int4 NULL,
	grade int4 NULL,
	id int4 NOT NULL,
	CONSTRAINT grades_pkey PRIMARY KEY (id)
);


-- public.image definition

-- Drop table

-- DROP TABLE image;

CREATE TABLE image (
	id_answer int4 NULL,
	raster oid NULL,
	id int4 NOT NULL,
	CONSTRAINT image_pkey PRIMARY KEY (id)
);


-- public.student definition

-- Drop table

-- DROP TABLE student;

CREATE TABLE student (
	slogin varchar(50) NULL,
	spassword varchar(50) NULL,
	sadmins int4 DEFAULT 0 NULL,
	id int4 NOT NULL,
	CONSTRAINT student_pkey PRIMARY KEY (id)
);


-- public.subject definition

-- Drop table

-- DROP TABLE subject;

CREATE TABLE subject (
	namesubject varchar(50) NULL,
	id int4 NOT NULL,
	CONSTRAINT subject_pkey PRIMARY KEY (id)
);


-- public.teachers definition

-- Drop table

-- DROP TABLE teachers;

CREATE TABLE teachers (
	id int4 NOT NULL,
	first_name varchar(50) NULL,
	last_name varchar(50) NULL,
	CONSTRAINT teachers_pkey PRIMARY KEY (id)
);


-- public.teachers_subject definition

-- Drop table

-- DROP TABLE teachers_subject;

CREATE TABLE teachers_subject (
	id_teachers int4 NOT NULL,
	id_subject int4 NOT NULL,
	CONSTRAINT teachers_subject_pk PRIMARY KEY (id_teachers, id_subject)
);