'use strict';

// Write a function that takes two arrays (a and b) as arguments;
// Create an object that has properties with keys 'a' and corresponding values 'b';
// Return the object;

//use forEach on the first array 


const func1=(a,b)=>{
    const obj={};
    a.forEach((x,i)=>{
      obj[x]=b[i]
    })
    return obj;
}

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string




const insert=(a,b)=>{
let arr=a.split('').reverse();
 let arr1=[];

 for (let i = 0; i < arr.length; i+=3) {
 arr1.push(arr.slice(i,i+3))
    
 }
arr1=arr1.reverse().map(x=>x=x.reverse());

arr1=arr1.map(y=>y.length===3?[b,...y]:y).flat().join('');
return arr1;
}



// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

const chaos=(a,b)=>`${(a.charAt(0).toUpperCase()+a.slice(1)).replace("%",'')}${(b.replace("%",'')).split('').reverse().join('')}`


// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number


const dot=a=>{
  return Number(a.toFixed(2));
}


// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number


const nextPrimeNumber = (num) => {
    for(let i = 2; i < num ; i++) {
        if(num % i === 0) {
            return nextPrimeNumber(num + 1)
        }

    }
    return num;
};



// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

//turn string into array 
//use charcodeAt function and return array with inceremented values;
//turn array back to string;

const increment=str=>str.split('').map(x=>String.fromCharCode(x.charCodeAt(0)+1)).join('')



// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

//use the condition a===Math.round(a);

const whole=a=>a===Math.round(a);


// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}


//take in the array and create an empty object;
// loop over the array and extract first letter of each string;
//strings to be grouped in the object by first letter;


const group=arr=>{

    const obj={}
    let arr1=arr.map(x=>x.charAt(0).toLowerCase())
 let arr2=[...new Set(arr1)];
 arr2.forEach(letter=>obj[letter]=[])

 arr.forEach(elm=>{
    for (const key in obj) {
        if (key===elm.charAt(0).toLowerCase()) {
            obj[key].push(elm)
        }
    }
 })
    return obj;
}




// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays


const arbitrary=(...arrays)=>{
return arrays.flat()
}



// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

//create an empty array;
//loop between the two numbers(including the numbers)
//push every element in the loop to array;


const between=(min,max)=>{
    const arr=[]
    for (let i = min; i <=max; i++) {
        
        arr.push(i)
    }
    return arr
}


// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

//filter elms where i+1%n===0;

const save=(a,n)=>a.filter((x,i)=>(i+1)%n===0);





// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object


//use a for in loop for hte object and use str.replace(method)
//use str.trim()to get rid of whitespace,and check for string length;

const checking=obj=>{
    for (const key in obj) {
       obj[key]=obj[key].trim();
       if(obj[key].length===0)obj[key]=null;
    }
    return obj;
}



// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

//use forEach to add the property with the value of the string
//

const func2=(arr,str)=>{
let arr1=arr;
arr1.forEach(obj=>obj['continent']=str)

return arr1
}



// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array



//create a set from the array to get unique values
//turn set back into array(named unique)
//create object
//loop over unique to create properties in the object
//loop over the original array to give values;

const func3=arr=>{
    const obj={};
const unique=[...new Set(arr)];
unique.forEach(x=>obj[x]=0);

arr.forEach(y=>obj[y]++);
return obj;
}




// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in


const extract=obj=>{
    const ext={};
    const arr=['fn','ln','size','weight'];
     for (const key in obj) {
      arr.forEach(str=>{
        if(obj[str]){
            ext[str]=obj[str];
            if(str==='size')ext[str]=obj[str]+'cm';
            if(str==='weight')ext[str]=obj[str]+'kg';
        };
        
      });
     }
    return ext;
}



// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

//use for in loop to loop over object;

const swap=obj=>{
    const swapped={}
    for (const key in obj) {
       swapped[obj[key]]=key
    }
    return swapped
}




// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const merge=(x,y)=>{
const {b,...rest}=y;
return {...x,...rest,d:b}
}


// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const mult=(a,b)=>{
    const obj={}
    for (const key in a) {
       obj[key]=a[key]*b;
    }
    return obj;
}



// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

const abs=(a,b)=>{
    let diff=Math.abs(a-b);
    let seconds=diff/1000;
    let minutes=seconds/60;
    let hours=minutes/60;
 let  roundHrs=Math.floor(hours);
 let roundMin=Math.floor(minutes);
 
    return {hrs:roundHrs,min:roundMin%60,sec:seconds%60};
}




// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const gap=(a,b)=>{
   const diff=Math.abs(a-b);
   const days=diff/1000/60/60/24
   return days;
}



// Write a function that takes two sets (a and b) as arguments;
// Get the intersection of the sets;
// In other words, return a set containing all elements that are both in a as well as b;


const intersection=(a,b)=>{
    const int=new Set();
a.forEach(value=>{
        if(b.has(value))int.add(value);
    });

    return int;
}


// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

const remove=(set,val)=>{
    set.delete(val);
    return set
}

console.log(remove(new Set([1, 2, 3]), 4));