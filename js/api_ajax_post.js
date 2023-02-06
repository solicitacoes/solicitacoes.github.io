const http = new simpleAJAX;

const data = {
    "name": "Bolaji Ayodeji",
    "username": "bolajiayodeji",
    "email": "hi@bolajiayodeji.com",
    "address": {
      "street": "Hello world",
      "suite": "Hello",
      "city": "Lokoja, Kogi",
      "zipcode": "xxx-xxx-xxx",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "+234 8109445504",
    "website": "https://bolajiayodeji.com",
    "company": {
      "name": "PhilanthroLab",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
};

http.post('https://jsonplaceholder.typicode.com/users',
  data, (err, user) => {
    if(err) {
      console.log(err)
    } else {
      console.log(user);
    }
  });
