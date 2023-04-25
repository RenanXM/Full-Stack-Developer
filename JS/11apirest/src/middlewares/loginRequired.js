// me retorna um erro se o token for inválido.
import jwt from 'jsonwebtoken';

import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  // O token vem assim: "Bearer toooooooooooooooooooooooooooooooken"
  // aqui eu separo os dois
  const [, token] = authorization.split(' ');

  // Verificar se o token é válido
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    // Aqui eu quero checar se o email é o mesmo pra mudar o token(grande disucussão);
    // caso a pessoa atualize o email, acho que o token deveria mudar.
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userID = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};

// EXPLICAÇÃO SOBRE TOKEN:

/*
Quem controla a sessão agr é o usuário com o Token dele;
Quem gera esse token sou eu. Então assim que o usuário
digitar usuário e senha corretamente, vamos gerar um token
e falar: "toda requisição que vc fizer que precisa de login vc
me manda esse token nas headers." Depois disso, eu vou verificar
esse token, ver se é válido e vou extrair desse token quem é o usuário
e qual o email dele. Com isso, todas as páginas que precisarem de login
eu vou ter ID e usuário ja nela.
*/
