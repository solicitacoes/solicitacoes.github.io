users = http.delete('https://jsonplaceholder.typicode.com/solicitar/idItem/',
(err, response) => {
  if(err) {
    console.log(err)
  } else {
  console.log(response);
  }
});
