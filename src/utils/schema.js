const database = require('./database');

const schema = {
	1: `
	    CREATE TABLE IF NOT EXISTS usuarios (
		id SERIAL PRIMARY KEY,
		email TEXT NOT NULL,
		senha TEXT NOT NULL,
		nome TEXT NOT NULL,
		deletado BOOL DEFAULT FALSE
	)
	`,
	2: `
	 	CREATE TABLE IF NOT EXISTS clientes (
		id SERIAL PRIMARY KEY,
		nome TEXT NOT NULL,
		email TEXT NOT NULL,
		cpf TEXT NOT NULL,
		tel TEXT NOT NULL,
		idDoUsuario INTERGER NOT NULL,
	`,
	3: `
	 	CREATE TABLE IF NOT EXISTS cobrancas (
		id SERIAL PRIMARY KEY,
		valor INTERGER NOT NULL,
		vencimento DATE,
		clienteId INTERGER NOT NULL,
		descricao TEXT NOT NULL,
		linkDoBoleto TEXT NOT NULL,
		codigoDeBarras TEXT NOT NULL,
		dataDePAgamento DATE,
	`,
};

module.exports = { database, schema };
