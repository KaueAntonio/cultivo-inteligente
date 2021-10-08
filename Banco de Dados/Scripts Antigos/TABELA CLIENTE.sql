USE sprint2;

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