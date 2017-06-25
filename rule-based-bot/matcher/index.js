'use strict';

const patterns = require('../patterns');
const xRegExp = require('xregexp');

/*
  > Matches the pattern of the user input 'str'
    against the pattern dictionary
  > calls the callback param
    using the matching pattern object
    to get the intent of the user input string
  > If no matches are found, call callback with empty object
*/
let matchPattern = (str, cb) => {
  let getResult = patterns.find(item => {
    if(xRegExp.test(str, xRegExp(item.pattern, "i"))){
      return true;
    }
  });

  if(getResult) {
    return cb({
      intent: getResult.intent
    });
  } else {
    return cb({});
  }
}

module.exports = matchPattern;
