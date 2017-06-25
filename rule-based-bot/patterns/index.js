const patternDictionary = [{
  patten: '\\b(Hi|Hello|Hey|)\\b',
  intent: 'Hello'
}, {
  patten: '\\b(bye|exit)\\b',
  intent: 'Exit'
}];

module.exports = patternDictionary;
