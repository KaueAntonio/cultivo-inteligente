-- Criando nosso banco de dados
create database usuario_cadastro;

-- Ativando o Banco
use usuario_cadastro;

-- Criando a tabela de cadastro
create table cadastro (
idCadastro int primary key auto_increment,
nome varchar (100),
email varchar (100),
cpf char (14),
senha varchar (15)
);

-- Inserindo dados na tabela cadastro
insert into cadastro (nome,email,cpf,senha) values
('Bruno Tavares','bruno@bandtec.com.br','459.208.320-05','123456'),
('Breno Padovani','breno@bandtec.com.br','459.208.320-01','654321'),
('Carlos Felix','felix@bandtec.com.br','459.208.320-00','111222'),
('Beatriz Sena','beatriz@bandtec.com.br','459.208.320-90','222333'),
('Allan Araujo','allan@bandtec.com.br','459.208.320-10','444555'),
('Kaue Antonio','kaue@bandtec.com.br','459.208.320-77','666777'),
('Bob Marley','bob@bandtec.com.br','420.208.420-10','888999'),
('Italo Ferreira','italo@bandtec.com.br','459.208.420-00','444222'),
('Leticia Bufoni','leticia@bandtec.com.br','500.200.300-88','009988'),
('Rogerio Ceni','mito@bandtec.com.br','123.345.567-89','666666');


-- Mostrando os Dados da tabela cadastro
select * from cadastro;


-- Criando a tabela cliente
create table cliente (
idCliente int primary key auto_increment,
empresa varchar (100),
cnpj varchar (18),
cep char (9),
endereço varchar (150),
complemento varchar (30),
numero varchar (20),
cidade varchar (50),
estado char (2),
site varchar (100),
telefone char (9)
);

-- Inserindo dados na tabela cliente
insert into cliente (empresa,cnpj,cep,endereço,complemento,numero,cidade,estado,site,telefone) values
('Coffe&ltda','98.155.730/0001-66','19580-970','Rua Domingos Ferreira de Medeiros','empresa','488','Anhumas','sp','coffeltda.net',1244-3333),
('Fazenda do Café','50.753.931/0001-39','19580-980','Av. dos Ipes','empresa','5554','Piracicaba','sp','fazendadocafe.com.br','1234-4321'),
('Recanto do Café','35.913.635/0001-64','19580-770','Av. das Palmeiras','empresa','60','Piracicaba','sp','recantodocafe.com','1234-5551'),
('Caminho do Café','69.989.606/0001-06','19580-120','Av. dos Pardais','empresa','500','Campinas','sp','caminhodocafe.org','1234-4111'),
('Fazenda do Tavares','40.522.859/0001-85','19580-960','Av. das Maritacas','empresa','400','Vinhedo','sp','fazendodt.com.br','1234-4721'),
('Cultivo de Ponta','62.625.953/0001-00','19580-950','Av. dos Coqueiros','empresa','300','Sorocaba','sp','cultivodeponta.com','1234-4671'),
('Morro do Café','91.124.336/0001-11','19580-940','Av. do Café','empresa','100','Itu','sp','morrodocafe.com.br','1234-4000'),
('Café&Vida','29.311.245/0001-11','19580-930','Av. do Capim Fino','empresa','200','Piracicaba','sp','cafeevida.net','4334-4321'),
('Starbucafé','52.359.957/0001-22','19580-920','Av. dos Alpes','empresa','522','São Pedro','sp','starbucafe.com','1234-4561'),
('Rei do Cultivo','97.833.277/0001-37','19580-910','Av. dos Montes','empresa','513','São Pedro','sp','kingcultivo.com.br','1234-9021');


-- Mostrando os dados ta tabela cliente
select * from cliente;


-- Criando a tabela de dados do arduino
create table dados_arduino (
idCliente int primary key auto_increment,
dia int,
temperatura varchar (100),
gastos varchar (1000),
lucro varchar (1000)
);

-- Inserindo dados na tabela de dados do arduino (temperatura em graus celsius)
 insert into dados_arduino (dia,temperatura,gastos,lucro) values
 ('01','25','x','x'),
 ('02','25','x','x'),
 ('03','25','x','x'),
 ('04','25','x','x'),
 ('05','25','x','x'),
 ('06','25','x','x'),
 ('07','25','x','x'),
 ('08','25','x','x'),
 ('09','25','x','x'),
 ('10','25','x','x');

-- Mostrando os dados da tabela de dados do arduino
select * from dados_arduino;