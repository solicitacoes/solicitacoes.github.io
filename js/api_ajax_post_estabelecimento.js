const http = new simpleAJAX;

const data = {
  nome: '',
  telefone: '',
  whatsapp: '',
  logradouro: '',
  bairro: '',
  cidade: '',
  estado: '',
  categoria: ''
};

http.post('https://jsonplaceholder.typicode.com/solicitar/cadastro/',
  data, (err, user) => {
    if(err) {
      console.log(err)
    } else {
      console.log(user);
    }
  });
