USE SHOPVIRTUAL;


DESCRIBE USER_PLATFORM;
DESCRIBE USER_SYSTEM;
DESCRIBE PRODUCT;

-- DELETE TABLE
DROP TABLE USER_PLATFORM;
DROP TABLE PRODUCT;
DROP TABLE USER_SYSTEM;
-- SELECT , CREATE
-- role : admin,normal,
INSERT INTO ROLE(name) VALUES('admin');
INSERT INTO ROLE(name) VALUES('normal');

select * from ROLE;


INSERT INTO  USER_SYSTEM (name,lastName,email,password,idRole) VALUES('Jobs','Barrial','jobs@gmail.com','$2b$10$xA0tNZyTpA7C6jggqSd1tebQz8Ty1W2Stz.aWEWPrrMmg91ae/vL6',1);
INSERT INTO  USER_SYSTEM (name,lastName,email,password,idRole) VALUES('Juan','Falcón','juan@gmail.com','$2b$10$xA0tNZyTpA7C6jggqSd1tebQz8Ty1W2Stz.aWEWPrrMmg91ae/vL6',2);

select * from USER_SYSTEM;

UPDATE  USER_SYSTEM
SET password="$2b$10$xA0tNZyTpA7C6jggqSd1tebQz8Ty1W2Stz.aWEWPrrMmg91ae/vL6"
WHERE idUser=2;

INSERT INTO  PRODUCT (brand,model,photo,price,size,color,description,serie,idUser) VALUES('Jordan','Retro 12','https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/82f0238b-2f37-4907-ad06-f98d9d7cf673/air-jordan-12-playoffs-ct8013-006-release-date.jpg',150,40,'#222','The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement',"Boys' Grade School",1);
INSERT INTO  PRODUCT (brand,model,photo,price,size,color,description,serie,idUser) VALUES('Jordan','Stay Loyal','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/404dccc4-339c-448c-a235-be42fb32ad91/jordan-stay-loyal-big-kids-shoe-CtMXtw.png',110,42,'#222','The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement',"Men's",1);
INSERT INTO  PRODUCT (brand,model,photo,price,size,color,description,serie,idUser) VALUES('Jordan','Retro 1 High OG','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8e01e221-8c4e-4964-97aa-828474f5fe3f/air-jordan-1-elevate-low-se-womens-shoes-1W20F7.png',
80,42,'#4B7BE5','The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement',"Boys' Preschool",1);
/* Queries */
select * from PRODUCT;

UPDATE  PRODUCT
SET photo="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/82f0238b-2f37-4907-ad06-f98d9d7cf673/air-jordan-12-playoffs-ct8013-006-release-date.jpg"
WHERE idProduct=1;


select * from USER_SYSTEM where idUser=1;
-- quiero traer la data del usuario y quiero saber su rol
select * from USER_SYSTEM where idUser=1;
select * from ROLE where idRole=1;
-- GG
select US.idUser,US.name,US.lastName,R.name as Role_Name from USER_SYSTEM AS US INNER JOIN ROLE AS R ON US.idRole=R.idRole where US.idUser=2;

-- DELETE DATA
truncate role;
delete from role where id=20;
select * from PRODUCT;


-- UPDATE
UPDATE PRODUCT
SET brand="Jordan by Jobs Deluxe Limited Edition",
model="Retro 14"
where idProduct=12;


INSERT INTO  USER_PLATFORM (name,lastName,email,password) VALUES('Juan Manel','Miroquesada','juanmanuel@gmail.com','$2b$10$xA0tNZyTpA7C6jggqSd1tebQz8Ty1W2Stz.aWEWPrrMmg91ae/vL6');
SELECT * FROM USER_PLATFORM;
UPDATE  USER_PLATFORM
SET password="$2b$10$xA0tNZyTpA7C6jggqSd1tebQz8Ty1W2Stz.aWEWPrrMmg91ae/vL6"
WHERE idUser=1;
SELECT * FROM USER_PLATFORM WHERE email="marielatecsup@gmail.com";

delete from Product where idProduct=14;