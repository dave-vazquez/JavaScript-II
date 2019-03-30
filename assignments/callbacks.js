/*
  Create a higher order function and invoke the callback function to test your work. 
  You have been provided an example of a problem and a solution to see how this works with our items array.  
  Study both the problem and the solution to figure out the rest of the problems.
*/

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook', 'yo-yo', 'Gum'];


console.log(); console.log();
/*********************************************************************************
*                                   EXERCISE I                                   *
**********************************************************************************/ 
logHeader('EXERCISE 1', 'getLength(items, cb)');

/* getLength passes the length of the array into the callback. */

function getLength(arr, cb) { 
  cb(arr.length);
}

getLength(items, function (length) {     
  console.log('Output:\n');
  console.log(length);
  console.log(); // line break
});


/*********************************************************************************
*                                   EXERCISE 2                                   *
**********************************************************************************/ 
logHeader('EXERCISE 2', 'last(items, cb)');

/* last passes the last item of the array into the callback. */

function last(arr, cb) {
  cb(arr[arr.length - 1]);
}

last(items, function (lastItem) {
  console.log('Output:\n');
  console.log(lastItem);
  console.log();
});

/*********************************************************************************
*                                   EXERCISE 3                                   *
**********************************************************************************/ 
logHeader('EXERCISE 3', 'sumNums(2, 4, cb)', false);

/* sumNums adds two numbers (x, y) and passes the result to the callback */

function sumNums(x, y, cb) {
  cb(x + y);
}

sumNums(2, 4, function (sum) {
  console.log('Output:\n');
  console.log(sum);
  console.log();
});

/*********************************************************************************
*                                   EXERCISE 4                                   *
**********************************************************************************/ 
logHeader('EXERCISE 4', 'multiplyNums(2, 4, cb)', false);

/* multiplyNums multiplies two numbers and passes the result to the callback. */

function multiplyNums(x, y, cb) {
  cb(x * y);
}

multiplyNums(2, 4, function (product) {
  console.log('Output:\n');
  console.log(product);
  console.log();
});

/*********************************************************************************
*                                   EXERCISE 5                                   *
**********************************************************************************/ 
logHeader('EXERCISE 5', 'contains(\'yo-yo\', items, cb) ');

/* Contains checks if an item is present inside of the given array/list.
   Pass true to the callback if it is, otherwise pass false.
*/

function contains(item, list, cb) {
  cb(item, list);
}

contains('yo-yo', items, function (item, list) {
  console.log('Output:\n');
  console.log(list.includes(item))
  console.log();
});

/*********************************************************************************
*                                STRETCH PROBLEM                                 *
**********************************************************************************/ 
logHeader('STRETCH PROBLEM', 'removeDuplicates(items, cb)');

/* removeDuplicates removes all duplicate values from the given array.
   Pass the duplicate free array to the callback function. Do not mutate the 
   original array.
*/

function removeDuplicates(array, cb) {
  cb(array.filter((elem, i, arr) => !(arr.indexOf(elem) < i) && !(arr.indexOf(elem) > i)));
}

removeDuplicates(items, function (uniqueArray) {
  console.log('Output:\n');
  console.log(uniqueArray);
  console.log(); 
}); 




/* ****************************************************************************************************************************************************************************** */





/*********************************************************************************
*                                 Log Header                                     *
**********************************************************************************/ 

function logHeader(messageHeader, funcInvoke, showArray = true) {

  (function assembleMessageHeader() {
    let top    = '/*********************************************************************************\n';
    let middle = `*                                                                                *\n`;
    let bottom = `**********************************************************************************/\n`;

    let messageStart = (middle.length/2) - (messageHeader.length/2)
    let messageEnd = (middle.length/2) + (messageHeader.length/2);
  
    middle = middle.slice(0,messageStart) + messageHeader + middle.slice(messageEnd, middle.length);

    messageHeader = top + middle + bottom;
  })();

  // log header
  console.log(top + middle + bottom);

  // log array
  if(showArray) {
    console.log('const items =  ', items);
    console.log(); // line break
  }

  // log function invocation
  funcInvoke ? console.log(funcInvoke): null;
  console.log(); // line break
}

