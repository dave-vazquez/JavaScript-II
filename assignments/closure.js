console.log(); // line break



/*********************************************************************************
*                        CHALLENGE 1: Write your own closure                     *
**********************************************************************************/ 
logHeader('CHALLENGE 1: Write your own closure', 'Write a simple closure of your own creation. Keep it simple! (nahh..)');

/* 
  Write a simple closure of your own creation.  Keep it simple!
*/






/*********************************************************************************
*                        CHALLENGE 2: Create a counter function                  *
**********************************************************************************/ 
logHeader('STRETCH CHALLENGE 2: Create a counter function');
const counter = () => {
  let count = 0;
  
  // Return a function that when invoked increments and returns a counter variable
  return function () {
    return count++;
  }
};

const newCounter = counter();

console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4
console.log(newCounter()); // 5




/*********************************************************************************
* CHALLENGE 3: Create a counter function w/object that increments and decrements *
**********************************************************************************/ 
logHeader('CHALLENGE 3: Create a counter function w/object that increments and decrements', 'Return an object that has two methods called \'increment\' and \'decrement\'.\n\'increment\' should increment a counter variable in closure scope and return it.\n\'decrement\' should decrement the counter variable and return it.');

/*
  Return an object that has two methods called `increment` and `decrement`.
  `increment` should increment a counter variable in closure scope and return it.
  `decrement` should decrement the counter variable and return it.
*/

const counterFactory = () => {
  let count = 0;

  return {
    increment: function() {
      return count++;
    },

    decrement: function () {
      return count--;
    }
  }
};


// counterFactory is invoked inside randomCounterFactory below
const randomCounterFactory = () => {

  const counter = counterFactory();

  // // new method added to counter to set limits to the 'randomCounter'
  // counter.beyondLimits = function() {
  //   console.log(this.beyondLimits);
  //   return this.count === -40 || this.count === 40;
  // }

  const ticker = {
    
    // string representation of the 'ticker'
    string: `                                       .`,

    // removes first space of the ticker string
    shiftTicker: function () {
      return this.string.split('')
                        .slice(1, this.string.length)
                        .join('');
    },

    // adds a space to the beginning of the 'ticker' string
    unshiftTicker: function () {
      return [ ' ', ...this.string.split('') ].join('');
    },

    beyondLimits: function () {
      
      return this.string.length === 0 || this.string.length === 80;
    }
  }

  return {
    start: interval => {

        const startCounter = setInterval(() => {

          if(ticker.beyondLimits())
            clearInterval(startCounter);

          if(Math.random() >= .5) {
            ticker.string = ticker.unshiftTicker();
            console.log(`${counter.increment()}${ticker.string}`);
          }

          else {
            ticker.string = ticker.shiftTicker();
            console.log(`${counter.decrement()}${ticker.string}`);
          }

      }, interval)
    }
  }
}

const randomCounter = randomCounterFactory(); 

randomCounter.start(250);

/* ****************************************************************************************************************************************************************************** */



/*********************************************************************************
*                                   Log Header                                   *
**********************************************************************************/ 
function logHeader(messageHeader, message = '') {

  (function assembleMessageHeader() {
      let top    = '\n/*********************************************************************************\n';
      let middle = `*                                                                                *\n`;
      let bottom = `**********************************************************************************/\n`;

      let messageStart = (middle.length/2) - (messageHeader.length/2)
      let messageEnd = (middle.length/2) + (messageHeader.length/2);
    
      middle = middle.slice(0,messageStart) + messageHeader + middle.slice(messageEnd, middle.length);

      messageHeader = top + middle + bottom;
  })();
  
  console.log(messageHeader);
  message ? console.log(message + '\n') : null;
  console.log('Output:\n');
}