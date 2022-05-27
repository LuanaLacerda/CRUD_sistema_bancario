CREATE database banco

drop table if exists usuario

CREATE table usuarios (
  id serial primary key,
  name text NOT NULL,
  cpf varchar(11) NOT NULL UNIQUE,
  data_nascimento date NOT NULL,
  telefone varchar(15) NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  senha text NOT NULL,
  saldo float default 0,
  numero_conta serial
)

drop table if exists transacoes

create table transacoes (
	id serial primary key,
  	id_usuario int not null,
  	tipo varchar(1) NOT NULL,
  	data timestamp default NOW(),
  	valor float not null,
  	foreign key (id_usuario) references usuarios (id)
)


