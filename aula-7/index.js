// // Print inicial
// console.log("Olá, mundo!")

// // Criação de variáveis
// var firstName = "Ariel";
// var middleName = "Ladislau";
// var lastName = "Reises";
// var age = 29;

// // Print com variáveis
// console.log("Hello! My name is", firstName, lastName + ", and I have", age, "years old.")

// // Tipos de variaveis
//     // var - Variável Global
//     // const - Constante
//     // let - variável dentro da função

// // Criação de variaveis
// let itemName = "Pen";
// let price = 3.99;
// let itemAvailabe = true;
// let itemColor = null;

// // Print das variáveis
// console.log(itemName, price, itemAvailabe, itemColor)

// // Notação Javascript - Orientação à Objetos & JSON
// let Pen = {

//     itemName: "Pen",
//     itemPrice: 3.99,
//     itemAvailabe: true,
//     itemColor: null,

// }

// // Print
// console.log(Pen)

// // Troca de atributos
// Pen.itemColor = "Red"

// // Print
// console.log(Pen)

// // Arrays (lista)
// let cars = ['Gol','Parati','Voyage','Saveiro','Fusca']
// console.log(cars[1]) // Iniciando em 0

// // Functions
// function saleStatus(status, total) {
//     console.log('Transaction '+ status, 'Total: R$ ' + total)
// }

// saleStatus('Approved', 1000)

// ----------------------------------------------
// aula 12/06
// Operadores ternarios

// Operadores logicos

// -----------------------------------------------
// Aula - 13/06

// If-Else

// let driverSpeed = 120

// if (driverSpeed > 110) {
//     console.log("TA COM PRESSA CORNO????", (driverSpeed - 110), "km/h acima do limite!")
// }

// else if (driverSpeed >= 100 && driverSpeed <= 110) {
//     console.log("Cuidado! Tu é boi, não o Usain Bolt.")
// }

// else {
//     console.log("Dentro da velocidade permitida. O Ricardão vai conseguir escapar de boa hoje.")
// }

//
// console.log("Lista de Aeroportos")
// let airPortName = "GRU"
// console.log(airPortName)
// switch (airPortName) {

//     case 'MCO':
//         console.log("Orlando International Airport")
//         break;
    
//     case 'LAX':
//         console.log("Los Angeles International Airport")
//         break;

//     case 'DXB':
//         console.log("Dubai International Airport")
//         break;

//     case 'GRU':
//         console.log("Guarulhos International Airport")
//         break;

//     case 'LAX':
//         console.log("Orlando International Airport")
//         break;

//     default:
//         console.log("Airport not found")
//         break;
// }

// Laços de Repetição

// For Loop

// for (let i=1; i<=10; i++){
//     console.log("O numero é: ", i)
// }

// While Loop
// let i=1;
// while(i<=10) {
//     console.log("O número é: ", i)
    
//     if(i == 8)
//         break;
//     i++
// }

// Do while Loop

// let index = 1
//     do{
//         console.log("O valor é: ", index)
//         index++
//     }
//     while(index <=10){

//     }

// let altura_chico = 1.50;
// let altura_ze = 1.10;
// let anos = 0;
    
// while (altura_ze <= altura_chico) {
//     altura_chico += 0.02;
//     altura_ze += 0.03;
//     anos++;
//     }
      
//     console.log(`Serão necessários ${anos} anos para que Zé seja maior que Chico.`);

// For... In Loop

// const myCar = {
//     model: 'BMW',
//     year: 2020,
//     color: 'White',
//     km: 68000,
// }
// for(let key in myCar) {
//     console.log(key, myCar[key])
// }

// const produtos=["smartphone", "smartwatch", "notebook"]

// for (let produto of produtos){

//     if(produto=='notebook'){
//         console.log("Achou o produto")
//     }
//     console.log(produto)
// }

// OOP

// const book = {
//     title: 'A Metamorfose',
//     author: 'Franz Kafka',
//     pages: 96,
//     price: 63.90,
//     chapters: {
//         1: 'A Transformação',
//         2: 'Apreensão e Desconforto',
//         3: 'Adaptação à Nova Vida',
//     }
//     // printBook: function() {
//     //     console.log("Printing Book...")
//     // }
// }

// console.log(book)

// Factory Function

// function createBook(title, author, pages, price) {

//     const book = {

//         title: title,
//         author: author,
//         pages: pages,
//         price: price

//     }
//     return book
// }

// const book1 = createBook('A Metamorfose', 'Franz Kafka', 96, 63.90)
// book1.title = "Na Colônia Penal"
// console.log(book1)

// Constructor Funcion

// function createBook(title, author, pages, price){

//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.price = price;

// }

// class createBook{
//     constructor(title, author, year, pages, price){

//     this.title = title;
//     this.author = author;
//     this.year = year
//     this.pages = pages;
//     this.price = price;

//     }
// }
// const book1 = new createBook('A Metamorfose', 'Franz Kafka', 1915, 96, 63.90)
// console.log(book1)

// const book2 = new createBook('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943, 100, 33.63)
// console.log(book2)

// const book3 = new createBook('Anna Karenina', 'Liev Tolstói', 1873, 864, 301.11)
// console.log(book3)

// class holyBible{
//     constructor(title, author, chapters, verses){

//     this.title = title;
//     this.author = author;
//     this.chapters = chapters
//     this.verses = verses;

//     }
// }

// ====================================

// class HolyBible {
//     constructor(title, author, chapters, verses) {
//         this.title = title;
//         this.author = author;
//         this.chapters = chapters;
//         this.verses = verses;
//     }
// }

// const books = [
//     new HolyBible('Genesis', 'Moisés', 50, 1533),
//     new HolyBible('Êxodo', 'Moisés', 40, 1213),
//     new HolyBible('Levítico', 'Moisés', 27, 859),
//     new HolyBible('Números', 'Moisés', 36, 1288),
//     new HolyBible('Deuteronômio', 'Moisés', 34, 959),
//     new HolyBible('Josué', 'Josué', 24, 658),
//     new HolyBible('Juízes', 'Samuel', 21, 618),
//     new HolyBible('Rute', 'Samuel', 4, 85),
//     new HolyBible('1 Samuel', 'Samuel', 31, 810),
//     new HolyBible('2 Samuel', 'Samuel', 24, 695),
//     new HolyBible('1 Reis', 'Jeremias', 22, 816),
//     new HolyBible('2 Reis', 'Jeremias', 25, 719),
//     new HolyBible('1 Crônicas', 'Esdras', 29, 942),
//     new HolyBible('2 Crônicas', 'Esdras', 36, 822),
//     new HolyBible('Esdras', 'Esdras', 10, 280),
//     new HolyBible('Neemias', 'Neemias', 13, 406),
//     new HolyBible('Ester', 'Mardoqueu', 10, 167),
//     new HolyBible('Jó', 'Moisés', 42, 1070),
//     new HolyBible('Salmos', 'Davi', 150, 2527),
//     new HolyBible('Provérbios', 'Salomão', 31, 915),
//     new HolyBible('Eclesiastes', 'Salomão', 12, 222),
//     new HolyBible('Cantares de Salomão', 'Salomão', 8, 117),
//     new HolyBible('Isaías', 'Isaías', 66, 1292),
//     new HolyBible('Jeremias', 'Jeremias', 52, 1364),
//     new HolyBible('Lamentações de Jeremias', 'Jeremias', 5, 154),
//     new HolyBible('Ezequiel', 'Ezequiel', 48, 1273),
//     new HolyBible('Daniel', 'Daniel', 12, 357),
//     new HolyBible('Oséias', 'Oséias', 14, 197),
//     new HolyBible('Joel', 'Joel', 3, 73),
//     new HolyBible('Amós', 'Amós', 9, 146),
//     new HolyBible('Obadias', 'Obadias', 1, 21),
//     new HolyBible('Jonas', 'Jonas', 4, 48),
//     new HolyBible('Miquéias', 'Miquéias', 7, 105),
//     new HolyBible('Naum', 'Naum', 3, 47),
//     new HolyBible('Habacuque', 'Habacuque', 3, 56),
//     new HolyBible('Sofonias', 'Sofonias', 3, 53),
//     new HolyBible('Ageu', 'Ageu', 2, 38),
//     new HolyBible('Zacarias', 'Zacarias', 14, 211),
//     new HolyBible('Malaquias', 'Malaquias', 4, 55)
// ];

// books.forEach(book => console.log(book));

//Built-in Objects  

// console.log(Math.max(2, 32, 46, 12, 5, 8, 10))
// console.log(Math.min(2, 32, 46, 12, 5, 8, 10))
// console.log(Math.round(3.4))
// console.log(Math.PI)

// console.log(Date())

// //String

// let message = 'Hey, Whats Up!'
// console.log(message.startsWith('Hey'))  
// console.log(message.endsWith('Up!'))
// console.log(message.includes('Whats'))  
// console.log(message.length)

//Template Literals 
// let name='Joe'

// const email = 'Hi ' + name +', \nThe meet is scheduled for 10:00 AM!\n' 

// const email2 = `Hi ${name},
// The meet is scheduled for 10:00 AM!`
// console.log(email, email2)

//Entendendo Arrays a fundo

// const random = ['Marcos', 1, true]
// console.log(random)

//Add valores dentro de uma Array

// const num =[7,8,9]
// num.push(10)
// num.unshift(1,2,3)
// num.splice(3, 0, 4, 5, 6) //posição, quantidade de elementos a serem removidos, elementos a serem adicionados
// console.log(num)    

//Localizando Itens dentro da Array primitiva

//console.log(num.indexOf(8))
//console.log(num.includes(21))

//Arrays de referência  

// const movies = [
//     {id:1, title:'The Matrix', rating:4.5},
//     {id:2, title:'The Godfather', rating:5},
//     {id:3, title:'Back to the Future', rating:4.5}   
// ]

// console.log(movies.find(function(movie){
//     return movie.title === 'The Godfather'
// }))

//Arrow Functions   

// console.log(movies.find(movie => movie.title === 'The Godfather'))

// //Removendo itens da Array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const last = numbers.pop()
// // const last = numbers.shift()
// const last = numbers.splice(3, 3)

// console.log(numbers)
// // console.log(last)

//Esvaziando uma Array

// let numbers = [1, 2, 3, 4]
// // numbers=[]
// // numbers.length = 0
// numbers.splice(0, numbers.length) 

// console.log(numbers)

//Concatenando Arrays
// let numbers = [1, 2, 3, 4]
// let letters = ['a', 'b', 'c', 'd']    
// all = numbers.concat(letters)  
// console.log(all)

// half = all.slice(3, 5)
// console.log(half)

//Joining Arrays

let clients = ['João', 'Maria', 'José', 'Pedro']
// console.log(clients)
// let clientsJoin= clients.join(' - ')

// console.log(clientsJoin)

//Organizar de forma Alfabética 

clients.sort()
clients.reverse()
console.log(clients)