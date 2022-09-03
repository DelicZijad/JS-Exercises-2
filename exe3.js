'use strict';

/*
 Create a function that returns the index of the first vowel in a string.
*/

const ind=str=>str.split('').findIndex(x=>/[aeiou]/gi.test(x));


/*
Create a function that returns the number of hashes and pluses in a string.
*/

const hashPlusCount=str=>str!==''?[str.match(/[#]/g).length,str.match(/[+]/g).length]:0;

/*Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

Must only contain numbers (no non-digits allowed).
Must not contain any spaces.
Must not be greater than 5 digits in length.
*/

const isValid=str=>/\d{5}/.test(str);

/*
Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.
*/

const convertBinary=str=>str.replace(/[a-m]/gi,'0').replace(/[n-z]/gi,'1');



/*
Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.
*/

const isJS=str=>/.jsx?$/g.test(str);

//testing for empty string;
const test=str=>!/./g.test(str)




/*
Create a function that moves all capital letters to the front of a word.
*/

const capToFront=str=>{
    const arr=str.split('');
    const func=(reg)=>str.match(reg).join('');

    return func(/[A-Z]/g)+func(/[a-z]/g)
}
/*
Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

*/


//use regex


 const removeLeadingTrailing=str=>{
  const arr= str.split('.')
 return arr[0].replace(/^0*/,'') + (arr[1] && /^[^0]/.test(arr[1])?'.'+ arr[1].replace(/0*$/,''):'');
};


//////
//checking for non-whitespace before the question mark.

const testing=str=>/\S["?"]$/.test(str);



///////


/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
*/

const sevenBoom=arr=>arr.includes(7)?"Boom":"there is no 7 in the array";


/*
Create a function that takes a word and returns true if the word has two consecutive identical letters.
*/

const checkRepeat = function (str) {
    var repeats = /(.)\1/;
    return repeats.test(str)
}


/*
Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.
*/

const emphasise=str=>str.match(/\S{1,}/g).map(x=>x[0].toUpperCase()+x.slice(1).toLowerCase()).join(' ');



/*
Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
*/

const getMiddle=str=>{
    const arr=str.split('');
    return arr[arr.length/2-1]+arr[(arr.length+2)/2-1]||arr[(arr.length+1)/2-1];
}



/*
Quantifiers indicate numbers of characters or expressions to match. By default quantifiers like * and + are "greedy", meaning that they try to match as much of the string as possible. The ? character after the quantifier makes the quantifier "non-greedy": meaning that it will stop as soon as it finds a match.

"some <foo> <bar> new </bar> </foo> thing".match(/<.*>/) ➞ "<foo> <bar> new </bar> </foo>"
"some <foo> <bar> new </bar> </foo> thing".match(/<.*?>/) ➞ "<foo>"
Find all HTML comments in the text. Use the ? in your expression.

let str = `... <!-- My -- comment test --> ..  <!----> .. `;

str.match(regexp) ➞ "<!-- My -- comment test -->", "<!---->"
*/
let str = `... <!-- My -- comment test --> ..  <!----> .. `;
const regexp=/<!--.*?-->/gs;


/*
Create a regex to match the letter "x" followed by two characters, each of which may be any digit or any character from A to F. Case sensitive.

*/

const regX=/x[A-F\d]{2}/g;

/*
Write a regular expression that ensures the word "end" is inside of another word (e.g. "bending"). Non-word characters such as !, ?, etc. cannot be boundaries.

You cannot use \w, *, . or + in your expressions.
You don't need to write a function, just the pattern.
The expression should be case-insensitive and should check all occurences of "end".
*/

const reggy=/[^\W]{1,}end[^\W]{1,}/gi;
//serach for 'end' surrounded by spec char or whitespace

const funccy=str=>{
   const proper=str.match(reggy);
   const not=str.match(/[\W\s]{1,}end[\W\s]{1,}/gi)
   return not?false:proper?true:false;
}



/*
Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

const reverse=str=>str.split(' ').map(x=>/\w{5,}/g.test(x)?x.split('').reverse().join(''):x).join(' ')


/*
Indira first year computer science student is taking an intro to RegEx class. Her professor gives her the assignment to write a function that checks whether an input date as a string is in the format yyyy/mm/dd. She has written a regular expression but the regular expression does not seem to be correct. Help her fix the error.


function assignment(d) {
	return d.search(/(?:\d{4})([-/])(\d{2})\2\3/);
}
*/

const assignment=str=>/\d{4}[/]\d{2}[/]\d{2}/.test(str);

/*
Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
*/

const countAll=str=>{
    const letters=str.match(/[A-Z]/gi)?str.match(/[A-Z]/gi).length:0;
    const digits=str.match(/\d/g)?str.match(/\d/g).length:0;
    return {'letters':letters,'digits':digits}
}

/*
To ensure that you only get the characters you want in a string you will need to use the character classes that accept hexadecimal digits.

Create a regex that matches the word "edabit". You cannot use character classes \w, \d, [], or . to solve.

*/

const regHex=/\x65\x64\x61\x62\x69\x74/g;



/*
Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

The string must contain an @ character.
The string must contain a . character.
The @ must have at least one character in front of it.
e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
The . and the @ must be in the appropriate places.
e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
If the string passes these tests, it's considered a valid email address.
*/

//with regex->

const validateEmail1=str=>/.{1,}@\w{1,}[.]\w{1,}/.test(str);


const validateEmail2=str=>{

const arr=str.split('@')

return arr.length===2 && arr[1].endsWith('.com') && arr[0].length>=1;

}


/*
Create a function that takes a number as an argument and returns a string formatted to separate thousands.
*/

const formatNum=num=>{
    const reg=/\d{1,}(?=\d{3})/g;
    const str=num.toString();
    const left=str.match(reg);
   const right=str.slice(-3)
    return left?`${left.join('')},${right}`:str
};


/*
Create a function that accepts an array of two strings and checks if all of the letters in the second string are present in the first string.
Function should not be case sensitive (as indicated in the second example).
Both strings are presented as a single argument in the form of an array.
Bonus: Solve this without RegEx.
*/


const letterCheck1=arr=>arr[1].split('').every(letter=>new RegExp([letter],'i').test(arr[0]));

//without regex->

const letterCheck2=arr=>arr[1].split('').every(letter=>arr[0].toLowerCase().includes(letter.toLowerCase()));

/*
Create a function that determines whether a string is a valid hex code.

A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.
*/

const isValidHexCode=str=>/#[A-Fa-f0-9]{6}/.test(str)&&str.length===7;



/*
Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.
Should only work with the following operations: +, -, *, /, %
*/

const mathExpr=str=>/\d{1,}\s*[+/%*-]\s*\d{1,}/.test(str);


/*
Create a function that converts dates from one of five string formats:

"January 9, 2019" (MM D, YYYY)
"Jan 9, 2019" (MM D, YYYY)
"01/09/2019" (MM/DD/YYYY)
"01-09-2019" (MM-DD-YYYY)
"01.09.2019" (MM.DD.YYYY)
The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:
*/

const convertDate=str=>{
 const date= new Date(str);
 const month=date.getMonth()+1;
 const day=date.getDate();
 const year=date.getFullYear();
 return [month,day,year]
}

/*
If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.

Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.
*/

//s1=20mph
//t1=18mins
//s2=60mph
//d1=d2
//s(avg)=30mph;
//d1=s1*t1---->s1*t1=s2*t2;
//t2=s1*t1/s2;

const avg=(t1,s1,s2)=>2*(s1*t1)/(t1+(s1*t1/s2));
;




/*
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
*/

const nums1=arr=>arr.filter(x=>/\d/.test(x));


//without regex--->

const nums2=arr=>arr.filter(x=>x.split('').some(y=>Number(y)%1===0));





