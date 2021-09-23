CREATE DATABASE sprint2;

USE sprint2;

CREATE TABLE Cadastro(
IdCadastro int primary key auto_increment,
Nome varchar (100),
Email varchar (100),
Cpf char (14),
Senha varchar (15)
);

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

ALTER TABLE cadastro ADD Fkcliente INT;
ALTER TABLE cadastro ADD foreign key (Fkcliente) 
	REFERENCES cliente (idcliente);
    
select * from cadastro;
    
UPDATE cadastro SET Fkcliente = 1 WHERE idcadastro = 4;
UPDATE cadastro SET Fkcliente = 3 WHERE idcadastro = 6;
UPDATE cadastro SET Fkcliente = 5 WHERE idcadastro = 8;

UPDATE cadastro SET situação = 'cliente' WHERE idcadastro = 4;
UPDATE cadastro SET situação = 'cliente' WHERE idcadastro = 6;
UPDATE cadastro SET situação = 'cliente' WHERE idcadastro = 8;

SELECT idcadastro as 'Inscrição de cadastro', nome as 'Nome do usuário', empresa as 'Empresa', situação
FROM cadastro JOIN cliente ON idcliente = fkcliente;
