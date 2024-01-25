## ES6 - Spread and Rest Operators

The rest and spread operators (`...`) allow you to further simplify your code by using destructuring to automatically capture the rest of an array or object in a variable (rest operator), or by spreading out variables into an array or object (spread).

For example, using the spread operator to combine the following objects:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log({ ...obj1, ...obj2 });
```

Will result in the following object

```javascript
{ a:1, b:2, c:3, d:4 } // This will be the output of using the spread operator to combine obj1 and obj2
```

Here's another example, this time using the rest operator. The following function adds two numbers together:

```javascript
function logNumbers(x, y, ...parameters) {
  console.log(x, y);
  console.log(parameters);
}

logNumbers(1, 2, 3, 4, 5);
```

The `logNumbers` function first logs `1 2` and then logs the array `[3, 4, 5]`
