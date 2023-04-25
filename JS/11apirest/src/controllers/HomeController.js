class HomeController {
  // Recebe uma requisição e uma response.
  async index(req, res) {
    // Enviando um objeto JSON :)
    res.json('Index');
  }
}

// Exportando
export default new HomeController();
