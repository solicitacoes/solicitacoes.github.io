const http = new simpleAJAX;

users = http.get('https://jsonplaceholder.typicode.com/q/estabelecimento',
  (err, users) => {
    if(err) {
      console.log(err) // { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
    } else {
    console.log(users); // { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
    }
  });
