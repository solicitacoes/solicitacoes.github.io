const http = new simpleAJAX;

users = http.get('https://jsonplaceholder.typicode.com/users',
  (err, users) => {
    if(err) {
      console.log(err)
    } else {
    console.log(users);
    }
  });
