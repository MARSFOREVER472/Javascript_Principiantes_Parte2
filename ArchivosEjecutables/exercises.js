/*
     JavaScript Practice Exercises For Beginners!
     ============================================

     Beginner Exercises: Part 2
     --------------------------
*/

/* 
   Exercise 1:
   -----------

   Write a JavaScript program to create a new string from a
   given string taking the first 3 characters and the last 3
   characters of a string and adding them together.

   P.D. : The string length must be 3 or more, if not, the original
   string is returned.

*/

const makeNewString = (str) =>
    str.length < 3 ? str: str.slice(0, 3) + str.slice(-3);

console.log(makeNewString('abc'));
console.log(makeNewString('abcdef'));
console.log(makeNewString('abc123abc123'));

console.log(makeNewString('ab'));

/*
   Exercise 2:
   -----------

   Write a JavaScript program to extract the first half of a
   string of even length.

*/

const primeraMitad = (str) => str.slice(0, str.length / 2);

console.log(primeraMitad('temp'));
console.log(primeraMitad('temple'));
console.log(primeraMitad('temples'));

/*
   Exercise 3:
   -----------

   Write a JavaScript Program to concatenate 2 strings
   except their first character.

*/

const concatenate = (str1, str2) =>
   str1.slice(1) + str2.slice(1);

console.log(concatenate('abc', 'def'));
console.log(concatenate('Junior', 'Developer'));

/*
   Exercise 4:
   -----------

   Given 2 values, write a JavaScript program to find out
   which 1 is nearest to 100.

*/

const closetTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;

console.log(closetTo100(99, 1));
console.log(closetTo100(51, 49));
console.log(closetTo100(50, 50));