class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Método de instância.
  aumentarVolume() {
    this.volume += 2;
  }

  //Método de instância.
  diminuirVolume() {
    this.volume -= 2;
  }

  //Método estático
  static trocaPilha() {
    console.log('OK, vou trocar');
  }


}

const controle1 = new ControleRemoto('LG', 10);
//controle1.trocaPilha(); Vai dar um erro, ele nao 
//entende isso como um método de instância. Se quisermos
//usar esse método, tem que ser na CLASSE

ControleRemoto.trocaPilha();
