# JSON

**JavaScript Object Notation (JSON)** is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

## A first example

The object below is perfectly valid JSON:

```json
{
    "firstName": "Jane",
    "lastName": "Doe",
    "age": 37,
    "hasDrivingLicense": true
}
```

Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.

## Convertion between JSON and JavaScript objects

JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue —  JavaScript provides a global JSON object that has methods available for converting between the two:

- `JSON.parse()`: Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
- `JSON.stringify()`: Accepts an object as a parameter, and returns the equivalent JSON string form.

**Note:** Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.

A JSON object can be stored in its own file, which is basically just a text file with an extension of `.json`, and a MIME type of `application/json`.

## Notes

- JSON is purely a data format — it contains only properties, no methods.
- JSON requires double quotes to be used around strings and property names. Single quotes are not valid.
- Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like JSONLint.
- JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be a valid JSON object.
- Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.

**Source:** https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON