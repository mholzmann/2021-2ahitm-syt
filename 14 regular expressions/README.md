# Regular Expressions

A `RegExp` object is used for matching text with a pattern:

```javascript
const string = 'The best way to validate a string is to use regular expressions!';
let pattern = /best/;                   // literal notation to create a RegExp object
let result = pattern.test(string);      // tests whether string contains 'best'
console.log(`${pattern} => ${result}`); // => true
```

You can create the same `RegExp` object by using the constructor:

```javascript
let pattern = new RegExp('best');
```

For more information see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

If you want to test your regular expression or don't know how to create it, visit [regex101.com](https://regex101.com/).

At [regexone.com](https://regexone.com/) you find a online tutorial with interactive exercises.

