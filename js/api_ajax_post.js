const http = new simpleAJAX;

const data = {
    "nome": "Bolaji Ayodeji",
    "celular": "bolajiayodeji",
    "email": "hi@bolajiayodeji.com"
};

http.post('https://jsonplaceholder.typicode.com/users',
  data, (err, user) => {
    if(err) {
      console.log(err)
    } else {
      console.log(user);
    }
  });
