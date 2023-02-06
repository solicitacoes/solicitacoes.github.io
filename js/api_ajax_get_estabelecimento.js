export const http = new simpleAJAX;

export const TemplateEstabelecimento = http.get('https://jsonplaceholder.typicode.com/solicitar/estabelecimentos/template',
  (err, users) => {
    if(err) {
      console.log(err) // { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
    } else {
    console.log(users); // { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
    }
  });

export const EstabelecimentosComEmail = http.get('https://jsonplaceholder.typicode.com/solicitar/estabelecimentos/email',
  (err, users) => {
    if(err) {
      console.log(err) // { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
    } else {
    console.log(users); // { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
    }
  });

export const EstabelecimentosComWhatsapp = http.get('https://jsonplaceholder.typicode.com/solicitar/estabelecimentos/whatsapp',
  (err, users) => {
    if(err) {
      console.log(err) // { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
    } else {
    console.log(users); // { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
    }
  });
