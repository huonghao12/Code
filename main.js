//Tạo chuỗi
var myString = 'Nguyen Huong hoc JS JS JS     ';
var firstName ='Nguyen';
var lastName ='Huong';
console.log(myString);
//Kiểm tra độ dài chuỗi
console.log(myString.length);
console.log(`Tôi tên là: ${firstName} ${lastName}`);
//Length
console.log(myString.length);
//Find index
console.log(myString.indexOf('JS'));
//Cut string
console.log(myString.slice(7 ,12));
//Replace
console.log(myString.replace('JS','Javascript'));
console.log(myString.replace(/JS/g,'Javascript'));
//Convert to upper case
console.log(myString.toUpperCase());

//Convert to lower case
console.log(myString.toLowerCase());

//Trim
console.log(myString.trim());

//Split
var game = 'LOL , VAL ,TFT';
console.log(game.split(' ,'));
//Get a character by index
console.log(myString.charAt(7));
//Làm việc với number
var Pi= 3.14;
// Dùng toFixed để làm tròn
console.log(Pi.toFixed());
// Dùng toString để chuyển đổi Number sang String 
console.log(typeof Pi.toString());
//Array
var Game = ['LOL' , 'VAL' ,'TFT'];
console.log(Game);
console.log(Array.isArray(Game));
console.log(Game.length);
console.log(Game[1]);

//Làm việc với Array

// To String
console.log(Game.toString());

// Join
console.log(Game.join(' '));

// Pop (Xóa pt cuối mảng và trả về phần tử cuối)

//console.log(Game.pop());

// Push(Them pt cuối mảng và trả về phần tử cuối)

// console.log(Game.push('Pokemon'));
// console.log(Game);

// Shift

//console.log(Game.shift());

// UnShift
// console.log(Game.unshift('Pokemon'));
// console.log(Game);

// Splicing
// Game.splice(1 ,3)
// console.log(Game);

// Concact
var Game2 = ['CS' ,'CF'];
console.log(Game.concat(Game2));    

// Slicing
console.log(Game.slice(0,2));    




