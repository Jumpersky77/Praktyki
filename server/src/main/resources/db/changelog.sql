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
	id SERIAL NOT NULL,
	CONSTRAINT answers_pkey PRIMARY KEY (id)
);


-- public."comments" definition

-- Drop table

-- DROP TABLE "comments";

CREATE TABLE "comments" (
	id_student int4 NULL,
	id_answer int4 NULL,
	comment_text text NULL,
	id SERIAL NOT NULL,
	CONSTRAINT comments_pk PRIMARY KEY (id)
);


-- public.grades definition

-- Drop table

-- DROP TABLE grades;

CREATE TABLE grades (
	id_student int4 NULL,
	id_answer int4 NULL,
	grade int4 NULL,
	id SERIAL NOT NULL,
	CONSTRAINT grades_pkey PRIMARY KEY (id)
);


-- public.image definition

-- Drop table

-- DROP TABLE image;

CREATE TABLE image (
	id_answer int4 NULL,
	raster oid NULL,
	id SERIAL NOT NULL,
	CONSTRAINT image_pkey PRIMARY KEY (id)
);


-- public.student definition

-- Drop table

-- DROP TABLE student;

CREATE TABLE student (
	slogin varchar(50) NULL,
	spassword varchar(50) NULL,
	sadmins int4 DEFAULT 0 NULL,
	id SERIAL NOT NULL,
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

--ALTER TABLE teachers_subject ADD CONSTRAINT teachers_subject_subject_fk FOREIGN KEY (id_subject) REFERENCES subject(id) ON DELETE CASCADE;
--ALTER TABLE teachers_subject ADD CONSTRAINT teachers_subject_teachers_fk FOREIGN KEY (id_teachers) REFERENCES teachers(id);
--ALTER TABLE answers ADD CONSTRAINT answers_teachers_fk FOREIGN KEY (id) REFERENCES teachers(id);
--ALTER TABLE "comments" ADD CONSTRAINT comments_answers_fk FOREIGN KEY (id_answer) REFERENCES answers(id) ON DELETE CASCADE;
--ALTER TABLE "comments" ADD CONSTRAINT comments_student_fk FOREIGN KEY (id_student) REFERENCES student(id);
--ALTER TABLE grades ADD CONSTRAINT grades_answers_fk FOREIGN KEY (id_answer) REFERENCES answers(id) ON DELETE CASCADE;
--ALTER TABLE grades ADD CONSTRAINT grades_student_fk FOREIGN KEY (id_student) REFERENCES student(id);
--ALTER TABLE image ADD CONSTRAINT image_answers_fk FOREIGN KEY (id_answer) REFERENCES answers(id) ON DELETE CASCADE;

insert into teachers values (1,'Ewa','Znamirowska');
insert into teachers values (2,'Agnieszka','Korzańska');
insert into teachers values (3,'Iryna','Mashyna');
insert into teachers values (4,'Małgorzata','Bulwit');
insert into teachers values (5,'Katarzyna','Kuś-Chatys');

INSERT INTO public.subject
(namesubject, id)
VALUES('Matematyka', 1);
INSERT INTO public.subject
(namesubject, id)
VALUES('Język Angielski', 2);
INSERT INTO public.subject
(namesubject, id)
VALUES('Język Niemiecki', 3);

INSERT INTO public.grades
(id_student, id_answer, grade)
VALUES(2, 1, 10);

INSERT INTO public.teachers_subject
(id_teachers, id_subject)
VALUES(1, 1);
INSERT INTO public.teachers_subject
(id_teachers, id_subject)
VALUES(2, 2);
INSERT INTO public.teachers_subject
(id_teachers, id_subject)
VALUES(3, 3);
INSERT INTO public.teachers_subject
(id_teachers, id_subject)
VALUES(4, 2);
INSERT INTO public.teachers_subject
(id_teachers, id_subject)
VALUES(5, 3);

INSERT INTO public."comments"
(id_student, id_answer, comment_text)
VALUES(2, 1, 'Dobra robota!');

INSERT INTO public.answers
(student_id, add_data, text_p, text_a, grade, id_teachers, id_subject)
VALUES(1, '2024-04-13', 'luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', 'turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in', 64.3, 1, 1);

INSERT INTO public.student
(slogin, spassword, sadmins)
VALUES('Antoni', 'kI3$9}.y*&', 0);
INSERT INTO public.student
(slogin, spassword, sadmins)
VALUES('Bartlomiej', '123', 1);
INSERT INTO public.student
(slogin, spassword, sadmins)
VALUES('Piotr', 'Piotr', 5);