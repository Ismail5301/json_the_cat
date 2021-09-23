const request = require('request');

const fs = require('fs');
const searchTerm = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, (error, response, body) => {

  if (error){
  console.log('Request Failed!');
  return;
  }


  
  const data = JSON.parse(body);
  let breed = data[0];
  if (breed){
    console.log(breed.description);
  }
  else {
    console.log('Breed not found!');
  }
  


});


