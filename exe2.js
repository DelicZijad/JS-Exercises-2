'use strict';

/*
Create a function which returns the number of true values there are in an array.
*/

const countTrue=arr=>arr.filter(x=>x===true).length;

/*
Write a function redundant that takes in a string str and returns a function that returns str.
*/


const redundant=str=>()=>str;


/*
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.
*/

const rolls=(a,b)=>a<b && b-a<=6;


/*
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.(without using strings)
*/

function num_of_digits(num) {
	return String(num).replace('-','').split('').length;
}//with strings



/*
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
*/

//create empty array;
//loop over the object;
//fill array with subarrays of key and value pairs;

const toArray=obj=>{
    const arr=[];

    for (const key in obj) {
        arr.push([key,obj[key]])
    }

    return arr;
}


/*
Create a function that concatenates n input arrays, where n is variable.
*/

const concat=(...arrays)=>arrays.flat()



/*
Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
*/

const add_suffix=suffix=>str=>str+suffix;



/*
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
*/

//loop beteween num(including)and length;


const arrayOfMultiples=(num,length)=>{
    const arr=[];
    for (let i = 1; i <=length; i++) {
        
        arr.push(num*i);
    }
    return arr
}

/*
Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
*/

const keysAndValues=obj=>{
const keys=Object.keys(obj);
const values=[];
keys.forEach(key=>values.push(obj[key]))
return [keys,values];
}

/*
Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

Create a function which takes a array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.
*/


const multiply=arr=>int=>arr.map(x=>x*int);


/*
In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
*/

function sortIt(arr) {
	return arr.sort((x,y)=>(Array.isArray(x)?x.flat():x)-(Array.isArray(y)?y.flat():y));
}

/*
reate a function that takes an array of numbers and returns the second largest number.

*/
function secondLargest(arr) {
	return arr.sort((x,y)=>x-y)[arr.length-2];
}

/*
Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).


*/

const removeDups=arr=>{
    const unique=[];

    arr.forEach(elm=>{
        if(unique.includes(elm))return;
        unique.push(elm);
    })
    return unique;
};


/*
Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
*/

//check for n with regex;

const isLastCharacterN=word=>/n/i.test(word[word.length-1]);


/*
Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
*/

const countSyllables=str=>{
    const vowels=new RegExp('[aeiou]','gi')
  let syllables=str.replace(vowels,'');
  let syl=new RegExp(syllables,'gi')

  return str.match(/[a-z][aeiou]/gi).length;

}

/*
Create a function that returns the selected filename from a path. Include the extension in your answer.


*/

const getFileName=str=>{
return str.split('/').find(x=>/.*[.].*/gi.test(x))
}


/*
You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

Here are a list of the characters classes in JavaScript:

., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
There is a hidden message in this string:

const str = "242Edabit23 45can344 3be3 254324addictive!"
Write the regular expression that reveals the hidden message. You have to remove all of the numbers to reveal the message. Use the character class \D in your expression.

Notes
*/


const reveal=str=>str.split('').filter(x=>/\D/g.test(x)).join('')



/*
Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them.
*/

const asterisk=str=>/a.*c.*/gi.test(str);


/*
Given a string of letters, how many capital letters are there?
*/


const capitalLetters=str=>str.split('').filter(x=>(/[A-Z]/g).test(x)).length;



/*
Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.

Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.
*/


const filterString=str=>{
 const func=regEx=>str.match(regEx).length;
return [func(/[A-Z]/g),func(/[a-z]/g),func(/\d/g),func(/\W/g)];
}

/*
Write a regular expression that matches a string if it contains at least one digit.
*/

const digit=str=>!!str.match(/\d/);


/*
Write a function that removes any non-letters from a string, returning a well-known film title.
*/

const lettersOnly=str=>str.match(/[A-Z]/gi).join('');


/*
The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.
*/

const test='Breakfast at 09:00 in the room 123:456.';

const time=str=>str.match(/\d{2}[:]\d{2}/).join('');

/*

Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.
*/
const groups=str=>str.match(/(blue\sflag|red\sflag)/g);

/*

Create a REGEXP that matches any characters except letters, digits and spaces. You must use a negated character set in your expression.

*/

const negate=str=>str.match(/[^A-Za-z0-9" "]/g);


/*
Create a RegExp to find ellipsis: 3 (or more?) dots in a row
*/

const ellipsis=str=>str.match(/[.]{3,}/g);

/*
Write a regular expression that matches only an even number. Numbers will be presented as strings.
*/

const even=str=>/[2468]$/.test(str);


/*
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.


Create a function that returns the total number of boomerangs in an array.
*/

const countBoomerangs=arr=>{
    const booms=[];
    arr.forEach((num,i,a)=>{
        if(num===a[i+2]&&num!==a[i+1])booms.push([num,a[i+1],a[i+2]])
    })
    return booms.length;
}


/*
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
*/

const oddishOrEvenish=(num=0)=>{
 const sum=num.toString().match(/\d/g).map(x=>Number(x)).reduce((a,b)=>a+b,0);

 return sum%2===0?"Evenish":'Oddish';
};






