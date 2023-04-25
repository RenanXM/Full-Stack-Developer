import User from '../models/User';
// CADA MÉTODO TEM QUE TER UMA ROTA!!
class UserController {
  // Recebe uma requisição e uma response.
  // Store
  async store(req, res) {
    try {
      // pegando o que foi nos dado no body da requisição
      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;
      // Enviando um objeto JSON :)
      return res.json({ id, nome, email });
    } catch (e) {
      // Existe um array de erros no sequelize e apenas estamos mostrando se tiver um.
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      // pego todos os usuários da base de dados mostrando so oq quero
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      // mando tudo num json
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      // pego o usuário pela PRIMARY KEY(id do usuário)
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      // mando tudo num json
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);

      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete (ESTÁ ERRADO!!!!!!!!!!!)
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

// Exportando
export default new UserController();
