let argv = process.argv.slice(2);
const request = require('request');
const fs = require('fs')
argv = argv.toString();
let breed = argv.slice(0, 4);
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(error)
  } else if (response.status === 404) {
    console.log('page not found')
  } else {
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log('breed not found')
    }
}
});


