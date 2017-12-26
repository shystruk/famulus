## substr(string, start, length)
[Source](../substr.js)

Extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
The substr() does not change the original string.

#### Custom Needs
Validate string type for preventing SyntaxError

#### Since
1.0.0

#### Category 
String

#### Arguments
{String} string   -  The string to extract<br>
{Number} start    -  The position where to start the extraction. First character is at index 0<br>
{Number?} length  -  Optional. The number of characters to extract. If omitted, it extracts the rest of the string
 
#### Returns
{String} Returns extract part of a string

#### Example
```javascript
substr('Hello World!', 0, 5)
// => 'Hello'
```

```javascript
substr({}, 0, 5)
// => {}
```

```javascript
substr('Hello World!', 6)
// => 'World!'
```
