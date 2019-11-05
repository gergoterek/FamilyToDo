INSERT INTO family (name) VALUES ('Lacza');
INSERT INTO family (name) VALUES ('Nagy');

INSERT INTO user (username, password, role, family_id) VALUES ('user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',1);
INSERT INTO user (username, password, role, family_id) VALUES ('sanyi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',1);
INSERT INTO user (username, password, role, family_id) VALUES ('jozsi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',1);
INSERT INTO user (username, password, role, family_id) VALUES ('bela', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',2);
INSERT INTO user (username, password, role, family_id) VALUES ('margit', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',2);

INSERT INTO task (task_name, family_id) VALUES('Bevásárló lista',1);
INSERT INTO task (task_name, family_id) VALUES('Bevásárló lista',2);

INSERT INTO element(element_name, element_status, task_id) values('Tejföl','UNDONE',1);
INSERT INTO element(element_name, element_status, task_id) values('Sajt','UNDONE',1);

INSERT INTO element(element_name, element_status, task_id) values('Kenyér','DONE',2);