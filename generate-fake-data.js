var faker = require('faker');

var randomName = faker.name.findName(); 
var randomEmail = faker.internet.email(); 
var randomAddress = faker.helpers.createCard().address;
var randomLoremPara = faker.lorem.paragraph();
console.log(randomName, randomEmail, randomAddress, randomLoremPara);