create database sprint2;

use sprint2;

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

insert into empresa (nome,cnpj,cep,endereço,numero,cidade,estado,site,telefone) values
('Coffe&ltda','98.155.730/0001-66','19580-970','Rua Domingos Ferreira de Medeiros','488','Anhumas','sp','coffeltda.net',1244-3333),
('Fazenda do Café','50.753.931/0001-39','19580-980','Av. dos Ipes','5554','Piracicaba','sp','fazendadocafe.com.br','1234-4321'),
('Recanto do Café','35.913.635/0001-64','19580-770','Av. das Palmeiras','60','Piracicaba','sp','recantodocafe.com','1234-5551'),
('Caminho do Café','69.989.606/0001-06','19580-120','Av. dos Pardais','500','Campinas','sp','caminhodocafe.org','1234-4111'),
('Fazenda do Tavares','40.522.859/0001-85','19580-960','Av. das Maritacas','400','Vinhedo','sp','fazendodt.com.br','1234-4721'),
('Cultivo de Ponta','62.625.953/0001-00','19580-950','Av. dos Coqueiros','300','Sorocaba','sp','cultivodeponta.com','1234-4671'),
('Morro do Café','91.124.336/0001-11','19580-940','Av. do Café','100','Itu','sp','morrodocafe.com.br','1234-4000'),
('Café&Vida','29.311.245/0001-11','19580-930','Av. do Capim Fino','200','Piracicaba','sp','cafeevida.net','4334-4321'),
('Starbucafé','52.359.957/0001-22','19580-920','Av. dos Alpes','522','São Pedro','sp','starbucafe.com','1234-4561'),
('Rei do Cultivo','97.833.277/0001-37','19580-910','Av. dos Montes','513','São Pedro','sp','kingcultivo.com.br','1234-9021');

insert into usuario (usuário, email, senha, fkempresa) values
('beatriz_sena','beatriz@bandtec.com.br','222333', 1),
('kaue_antonio','kaue@bandtec.com.br','666777', 2),
('daniela_silva', 'daniela@bandtec.com.br', '778844', 3),
('luiz_felipe', 'luiz@bandtec.com.br', '114455', 10),
('gabriel_vitorino', 'gabriel@bandtec.com.br', '557722', 4),
('joao_alvarenga', 'joao@bandtec.com.br', '335566', 5),
('bob_mrley','bob@bandtec.com.br','888999', 6),
('italo_ferreira','italo@bandtec.com.br','444222', 7),
('leticia_bufoni','leticia@bandtec.com.br','009988', 8),
('rogerio_ceni','mito@bandtec.com.br','666666', 9);


CREATE TABLE Estufa(
Idestufa INT PRIMARY KEY AUTO_INCREMENT,
Nome_estufa VARCHAR(30),
FkEmpresa INT,
FOREIGN KEY (FkEmpresa) REFERENCES empresa (Idempresa)
);

insert into estufa (nome_estufa, fkempresa) values
('Coffee', 1),
('FazendaCafé', 2),
('RecantoCafé', 3),
('CaminhoCafé', 4),
('Tavares', 5),
('PontaCafé',6),
('MorroCafé',7),
('VidaCafé',8),
('StarbuCoffe',9),
('ReidoCafé',10);

create table Dadoscolheita (
idcolheita int primary key auto_increment,
dataHora datetime default now() ,
QuantDaSafra int ,
fkestufa int,
foreign key (fkestufa)references estufa (idestufa)
);

insert into Dadoscolheita (QuantDaSafra, fkestufa) values 
('60',1),
('40',2),
('70',3),
('60',4),
('40',5),
('50',6),
('40',7),
('60',8),
('50',9),
('70',10);



create table sensor (
idsensor int primary key auto_increment,
nomeSensor varchar (45),
fkestufa int,
foreign key (fkestufa)references estufa (idestufa)
) auto_increment = 1000;


insert into sensor (nomeSensor, fkestufa) values 
('dht11',1),
('dht11',2),
('dht11',3),
('dht11',4),
('dht11',5),
('dht11',6),
('dht11',7),
('dht11',8),
('dht11',9),
('dht11',10);



create table dadosSensor (
idDados int primary key auto_increment,
dataHora datetime default current_timestamp,
umidade float,
temperatura float,
fksensor int,
foreign key (fksensor) references sensor (idsensor)
);

insert into dadosSensor (umidade, temperatura, fksensor) values 
(11.5, 20.7, 1000),
(12.5, 21.2, 1001),
(9.5, 18.8, 1002),
(11.0, 19.3, 1003),
(13.3, 21.4, 1004),
(10.5, 22.1, 1005),
(12.2, 19.0, 1006);

CREATE TABLE dados_agua(
Idagua int primary key auto_increment,
Consumo VARCHAR(50),
Dtconsumo DATETIME DEFAULT current_timestamp,
Fkestufa INT,
FOREIGN KEY (Fkestufa) REFERENCES Estufa (idestufa)
);

insert into dados_agua ( consumo, fkestufa ) values 
('1023', 1),
('1190', 2),
('1074', 3),
('1100', 4),
('1086', 5),
('1072', 6),
('1070', 7),
('1101', 8),
('1078', 9),
('1092', 10);


-- INDIVIDUAL
select * from usuario;
select * from empresa;
select * from estufa;
select * from sensor;
select * from dadossensor;
select * from dadoscolheita;
select * from dados_agua;


-- SELECT ENTRE USUÁRIO&EMPRESA&ESTUFA
SELECT usuario.usuário as 'Usuário', usuario.email as 'E-mail do Usuário', empresa.nome as 'Nome da Empresa', empresa.site as 'Site da Empresa', 
estufa.idestufa as 'Identificação da Estufa', estufa.nome_estufa as 'Nome da Estufa' FROM usuario 
JOIN empresa ON usuario.fkempresa = empresa.idempresa 
JOIN estufa ON estufa.fkempresa = empresa.idempresa 
WHERE idempresa = 1;

-- SELECT ENTRE ESTUFA&SENSOR&COLHEITA&AGUA

SELECT estufa.nome_estufa AS 'Estufa', sensor.nomesensor AS 'Sensor Instalado', 
dadossensor.umidade AS 'Valores Umidade', dadossensor.temperatura AS 'Valores Temperatura', dadossensor.datahora AS 'Data e Hora da Medição', 
Dadoscolheita.QuantDaSafra AS 'Quantidade da Safra', dadoscolheita.datahora AS 'Data e Hora da Colheita', dados_agua.consumo AS 'Consumo de Água', 
dados_agua.dtconsumo AS 'Data Consumo' FROM estufa 
JOIN sensor ON sensor.fkestufa = estufa.idestufa
JOIN dadossensor ON dadossensor.fksensor = sensor.idsensor
JOIN dadoscolheita ON dadoscolheita.fkestufa = estufa.idestufa
JOIN dados_agua ON dados_agua.fkestufa = estufa.idestufa
WHERE estufa.idestufa = 2; 

-- TODAS AS TABELAS
SELECT usuario.usuário AS  'Usuário', empresa.nome AS 'Nome Empresa', estufa.nome_estufa AS 'Estufa', sensor.nomesensor AS 'Sensor Instalado', 
dadossensor.umidade AS 'Valores Umidade', dadossensor.temperatura AS 'Valores Temperatura', dadossensor.datahora AS 'Data e Hora da Medição', 
dadoscolheita.quantdasafra AS 'Quantidade da Safra', dadoscolheita.datahora AS 'Data e Hora da Colheita', dados_agua.consumo AS 'Consumo de Água', 
dados_agua.dtconsumo AS 'Data Consumo' FROM usuario
JOIN empresa ON usuario.fkempresa = empresa.idempresa 
JOIN estufa ON estufa.fkempresa = empresa.idempresa
JOIN sensor ON sensor.fkestufa = estufa.idestufa
JOIN dadossensor ON dadossensor.fksensor = sensor.idsensor
JOIN dadoscolheita ON dadoscolheita.fkestufa = estufa.idestufa
JOIN dados_agua ON dados_agua.fkestufa = estufa.idestufa
WHERE usuario.idusuario = 8;
