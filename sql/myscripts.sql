CREATE DATABASE SHOPVIRTUAL;

USE SHOPVIRTUAL;


CREATE TABLE USER_PLATFORM(
idUser INT NOT NULL,
name NVARCHAR(50) NOT NULL,
lastName NVARCHAR(50) NOT NULL,
email NVARCHAR(50) NOT NULL,
password NVARCHAR(500) NOT NULL,
isActive TINYINT DEFAULT 1,
isCreated DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE USER_PLATFORM MODIFY idUser INT NOT NULL AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE USER_PLATFORM ADD CONSTRAINT UNIQUE_EMAIL UNIQUE(email);

CREATE TABLE ROLE(
idRole INT NOT NULL,
name NVARCHAR(20) NOT NULL,
isCreated DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE ROLE MODIFY idRole INT NOT NULL AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE ROLE ADD CONSTRAINT CHECK_ROLE_NAME CHECK (name IN ('ADMIN','NORMAL'));


CREATE TABLE USER_SYSTEM(
idUser INT NOT NULL,
name NVARCHAR(50) NOT NULL,
lastName NVARCHAR(50) NOT NULL,
email NVARCHAR(50) NOT NULL,
password NVARCHAR(500) NOT NULL,
isActive TINYINT DEFAULT 1,
isCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
idRole INT NOT NULL,
FOREIGN KEY(idRole) REFERENCES ROLE(idRole)
);

ALTER TABLE USER_SYSTEM MODIFY idUser INT NOT NULL AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE USER_SYSTEM ADD CONSTRAINT UNIQUE_USER_SYSTEM_EMAIL UNIQUE(email);
-- ALTER TABLE USER_SYSTEM ADD CONSTRAINT FK_USER_SYSTEM_ROLE FOREIGN KEY (idRole) REFERENCES ROLE(idRole);


CREATE TABLE PRODUCT(
idProduct INT NOT NULL,
brand  NVARCHAR(50) NOT NULL,
model NVARCHAR(50) NOT NULL,
photo  NVARCHAR(500) NOT NULL,
price FLOAT NOT NULL,
size FLOAT NOT NULL,
color  NVARCHAR(50) NOT NULL,
description  NVARCHAR(500) NOT NULL,
serie NVARCHAR(100) NOT NULL,
idUser INT NOT NULL,
isCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(idUser) REFERENCES USER_SYSTEM(idUser)
);

ALTER TABLE PRODUCT MODIFY idProduct INT NOT NULL AUTO_INCREMENT PRIMARY KEY;
-- ALTER TABLE PRODUCT ADD CONSTRAINT FK_USER_SYSTEM FOREIGN KEY (idUser) REFERENCES USER_SYSTEM(idUser);

-- end script create database

INSERT INTO ROLE(name) VALUES('admin');
INSERT INTO ROLE(name) VALUES('normal');


INSERT INTO  USER_SYSTEM (name,lastName,email,password,idRole) VALUES('Jobs','Barrial','jobs@gmail.com','$2b$10$xA0tNZyTpA7C6jggqSd1tebQz8Ty1W2Stz.aWEWPrrMmg91ae/vL6',1);
INSERT INTO  USER_SYSTEM (name,lastName,email,password,idRole) VALUES('Juan','Falc??n','juan@gmail.com','$2b$10$xA0tNZyTpA7C6jggqSd1tebQz8Ty1W2Stz.aWEWPrrMmg91ae/vL6',2);

INSERT INTO  PRODUCT (brand,model,photo,price,size,color,description,serie,idUser) VALUES('Jordan','Retro 12','https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/82f0238b-2f37-4907-ad06-f98d9d7cf673/air-jordan-12-playoffs-ct8013-006-release-date.jpg',150,40,'#222','The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement',"Boys' Grade School",1);
INSERT INTO  PRODUCT (brand,model,photo,price,size,color,description,serie,idUser) VALUES('Jordan','Stay Loyal','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/404dccc4-339c-448c-a235-be42fb32ad91/jordan-stay-loyal-big-kids-shoe-CtMXtw.png',110,42,'#222','The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement',"Men's",1);
INSERT INTO  PRODUCT (brand,model,photo,price,size,color,description,serie,idUser) VALUES('Jordan','Retro 1 High OG','https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8e01e221-8c4e-4964-97aa-828474f5fe3f/air-jordan-1-elevate-low-se-womens-shoes-1W20F7.png',
80,42,'#4B7BE5','The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed Flyknit upper uses Flywire technology for support and breathability where you need it. Higher foam provides soft responsiveness and long-lasting comfort, plus a wider forefoot helps lessen the chance of stress-related injuries. It`s still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement',"Boys' Preschool",1);

INSERT INTO  USER_PLATFORM (name,lastName,email,password) VALUES('Juan Manel','Miroquesada','juanmanuel@gmail.com','$2b$10$xA0tNZyTpA7C6jggqSd1tebQz8Ty1W2Stz.aWEWPrrMmg91ae/vL6');





