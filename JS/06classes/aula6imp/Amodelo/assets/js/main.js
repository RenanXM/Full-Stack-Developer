class ValidaFormulario {

  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }


  
  senhasSaoValidas() {
    let valid = true;
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    //Se não forem iguais
    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
    }

    if(senha.value.length < 6 || senha.value.lenght > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }
    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    //Limpar os erros quando reenvia o formulário
    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      //Pega o Elemento irmão anterior(label onde tem o nome do campo)
      const label = campo.previousElementSibling.innerText;

      //Se o campo estiver vazio
      if(!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      //Se o CPF é válido
      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valid = false;
      }

      //Se o usuário não for válido
      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }



  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    //Tamanho
    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    //letras e/ou números
    //Expressão regular que checa se tem letras e números
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
      valid = false;
    }

    return true;
  }

  validaCPF(campo) {
    //usando a classe de validacpf
    const cpf = new ValidaCPF(campo.value);

    //método da classe lá
    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido');
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    //Depois do campo, insere a div do erro.
    campo.insertAdjacentElement('afterend', div);
  }

}

const valida =  new ValidaFormulario();