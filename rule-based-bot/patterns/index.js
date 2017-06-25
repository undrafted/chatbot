'use strict';

const patternDictionary = [{
  pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
  intent: 'Hello'
}, {
  pattern: '\\b(bye|exit)\\b',
  intent: 'Exit'
}];

module.exports = patternDictionary;
