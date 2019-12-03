INSERT INTO family (name) VALUES ('Lacza');
INSERT INTO family (name) VALUES ('Nagy');

INSERT INTO user (nickname, username, password, role, family_id) VALUES ('User1','user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',1);
INSERT INTO user (nickname, username, password, role, family_id) VALUES ('User','user', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',1);
INSERT INTO user (nickname, username, password, role, family_id) VALUES ('Admin','admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_ADMIN',1);
INSERT INTO user (nickname, username, password, role, family_id) VALUES ('Sanyika','sanyi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',1);
INSERT INTO user (nickname, username, password, role, family_id) VALUES ('Jozsika','jozsi', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',2);
INSERT INTO user (nickname, username, password, role, family_id) VALUES ('Bela','bela', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',2);
INSERT INTO user (nickname, username, password, role, family_id) VALUES ('Margitka','margit', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ROLE_USER',2);
INSERT INTO user (nickname, username, password, role, family_id) VALUES ('Tibike','tibor', 'YWxtYWZh','ROLE_ADMIN',2);

INSERT INTO task (task_name, family_id) VALUES('Bevasarlo lista',1);
INSERT INTO task (task_name, family_id) VALUES('Teendok',2);
INSERT INTO task (task_name, family_id) VALUES('Bevasarlo lista',2);

INSERT INTO element(element_name, element_status, task_id) values('Tejfol','UNDONE',1);
INSERT INTO element(element_name, element_status, task_id) values('Sajt','UNDONE',1);
INSERT INTO element(element_name, element_status, task_id) values('Kenyer','DONE',2);


INSERT INTO invitation(invitation_code, family_id) values(123456, 2);
INSERT INTO invitation(invitation_code, family_id) values(7891234, 1);
