// Feito para falar pro Sequelize: 'Olha, esse Model tal precisa
// da sua conexão.

// Importando as coisas necessárias. (inclusive todos os Models)
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

// Todos os Models vão ficar nesse array
const models = [Aluno, User, Foto];

// Criando a conexão
const connection = new Sequelize(databaseConfig);

// Para cada model dentro do array de Models, eu vou chamar o método
// init de cada model.
models.forEach((model) => model.init(connection));

// Vou checar Se o model tem o método estático associate.
models.forEach((model) => model.associate && model.associate(connection.models));
