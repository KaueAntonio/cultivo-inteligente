create database cultivo;

use cultivo;

CREATE TABLE empresa (
Idempresa int primary key auto_increment,
Nome varchar (100),
CNPJ varchar (18),
CEP char (9),
Endereço varchar (150),
Numero varchar (20),
Cidade varchar (50),
Estado char (2),
Site varchar (100),
Telefone char (9)
);

CREATE TABLE usuario(
Idusuario INT PRIMARY KEY AUTO_INCREMENT,
Usuário VARCHAR(20),
Senha CHAR(6),
Email VARCHAR(40),
Fkempresa INT, 
FOREIGN KEY (Fkempresa) REFERENCES empresa (Idempresa)
);

create table avaliacoes(
idAvaliacao int primary key auto_increment,
titulo varchar(40),
num_estrelas int,
mensagem varchar(150),
dia float, 
mes float, 
ano float, 
Fkempresa INT, 
FOREIGN KEY (Fkempresa) REFERENCES empresa (Idempresa)
);



CREATE TABLE Estufa(
Idestufa INT PRIMARY KEY AUTO_INCREMENT,
Nome_estufa VARCHAR(30),
FkEmpresa INT,
FOREIGN KEY (FkEmpresa) REFERENCES empresa (Idempresa)
);



create table Dadoscolheita (
idcolheita int primary key auto_increment,
dataHora datetime default now() ,
QuantDaSafra int ,
fkestufa int,
foreign key (fkestufa)references estufa (idestufa)
);




create table sensor (
idsensor int primary key auto_increment,
nomeSensor varchar (45),
fkestufa int,
foreign key (fkestufa)references estufa (idestufa)
) auto_increment = 1000;

create table dadosSensor (
idDados int primary key auto_increment,
umi float, 
temp float, 
dia float, 
mes float, 
ano float, 
hora varchar(15), 
fkSensor int,
foreign key (fksensor) references sensor (idsensor)
);


update dadossensor set fksensor = 1000 where iddados = 49;
update dadossensor set fksensor = 1000 where iddados = 50;
update dadossensor set fksensor = 1000 where iddados = 51;
update dadossensor set fksensor = 1000 where iddados = 52;
update dadossensor set fksensor = 1000 where iddados = 53;
update dadossensor set fksensor = 1000 where iddados = 54;
update dadossensor set fksensor = 1000 where iddados = 55;


CREATE TABLE dados_agua(
Idagua int primary key auto_increment,
Consumo VARCHAR(50),
Dtconsumo DATETIME DEFAULT current_timestamp,
Fkestufa INT,
FOREIGN KEY (Fkestufa) REFERENCES Estufa (idestufa)
);







-- SCRIPT PARA SQL SERVER AZURE

CREATE TABLE empresa (
Idempresa int primary key identity,
Nome varchar (100),
CNPJ varchar (18),
CEP char (9),
Endereço varchar (150),
Numero varchar (20),
Cidade varchar (50),
Estado char (2),
Site varchar (100),
Telefone char (9)
);

CREATE TABLE usuario(
Idusuario INT PRIMARY KEY identity,
Usuário VARCHAR(20),
Senha CHAR(6),
Email VARCHAR(40),
Fkempresa INT, 
FOREIGN KEY (Fkempresa) REFERENCES empresa (Idempresa)
);

create table avaliacoes(
idAvaliacao int primary key identity,
titulo varchar(40),
num_estrelas int,
mensagem varchar(150),
dia float, 
mes float, 
ano float, 
Fkempresa INT, 
FOREIGN KEY (Fkempresa) REFERENCES empresa (Idempresa)
);

CREATE TABLE Estufa(
Idestufa INT PRIMARY KEY identity,
Nome_estufa VARCHAR(30),
FkEmpresa INT,
FOREIGN KEY (FkEmpresa) REFERENCES empresa (Idempresa)
);

create table Dadoscolheita (
idcolheita int primary key identity,
dataHora datetime default current_timestamp ,
QuantDaSafra int ,
fkestufa int,
foreign key (fkestufa)references estufa (idestufa)
);

create table sensor (
idsensor int primary key identity(1000,1),
nomeSensor varchar (45),
fkestufa int,
foreign key (fkestufa)references estufa (idestufa)
);

create table dadosSensor (
idDados int primary key identity,
umi float, 
temp float, 
dia float, 
mes float, 
ano float, 
hora varchar(15), 
fkSensor int,
foreign key (fksensor) references sensor (idsensor)
);

CREATE TABLE dados_agua(
Idagua int primary key identity,
Consumo VARCHAR(50),
Dtconsumo DATETIME DEFAULT current_timestamp,
Fkestufa INT,
FOREIGN KEY (Fkestufa) REFERENCES Estufa (idestufa)
);

