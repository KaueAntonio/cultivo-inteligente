use sprint2;

create table colheita (
idColheita int primary key auto_increment,
DataColheita datetime default current_timestamp  ,
qtdColheita int 
);