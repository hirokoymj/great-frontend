# JavaScript Technical Notes

## Date object

<hr />

## My tech note (draft)

**Day1**

```js
const newstr = str.replace(/xmas/i, 'Christmas');
Array.includes();
```

**Day 3**

- No early termination `forEach`, `map`
- early termination - `for in, some, find`
- str.split() vs str.splice()

```js
for (const key in hackedEmojis) {
  if (key === emojiKey) return hackedEmojis[key];
}
```

**Day 4**

- Array.splice()
- copyFilms.splice(randomIndex, 1);

**Day 5**

- Array.sort

**Day 9**

- Array.some(callback); // returns true or false
- Array.includes(value); // returns true or false
- Array.filter(callback); // returns Array or empty array

**Day13**

- switch()
- switch(true){case():, case(): }

**Day16**

- Nested objext

**Day18/19/23**

- array.reduce()
- Array.join()
- Array.shift()
- Array.pop()

**Summary (draft) JavaScriptmas 2024**

- string.startsWith(), String, `str.startsWith(":") :cry:`
- string.endsWith(), String, `str.endsWith(":") :cry:`
- string.replace(), String, `str.replace(/+s/i, '')`
- string.slice(), String, `":cry:".slice(1,-1) -> cry`
- string.split(""), String, returns array.
- for(let i=0; i<text.length; i++){}
- String char, array-like objects, `const text="tree" text[0] = "t"`

## Array Quiz

https://github.com/hirokoymj/JavaScript/tree/master/Array/Quiz

- for in, Object, `for(const key in obj)`
- Array.indexOf(v), Array, returns `n` or `-1`.
- Merge two object, Object, `const output = {...o1, ...o2}`
- Merge two object, Object, `o1.concat(o2)`
- Math.max(...array), Math
- Math.min(...array), Math
- for, Loop, for(let i=0; i<max; i++>){}
- obj.hasOwnProperty(v), Object
- Math.floor(1.6) -> 1, Math
- Math.ceil(1.4) -> 2, Math
- Math.round(2.4)//2, Math
- isInt `(a%1 === 0)`, Math
- isFloat `(a%1!==0)`, Math
- isOdd num: `(a%2 !== 0)`, Math
- isEven num: `(a%2)===0`, Math
- Division, Math, `const result = 10 / 3`
- Reminder, Math, `const reminder = 10 % 3`
- Math.abs(), Math
- Math.pow(10, len), Math, `Math.pow(10, 5) -> 100000`
- Math.floor(Math.random() \* array.length), Math
- Math.random(), Math, 0-99, `Math.floor(Math.random() * 100);`
- (typeof null) --> object, Misc
- (typeof {}); ==> object, Misc
- Date object, `Date(year, month, day, hour, minute, second, ms) //2024-01-01T08:03:04.005Z`//T=time, Z=UTC
- Tomorrow: Date, `const now = new Date(), const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)`
- `today.toLocaleDateString()` //12/19/2025, Date
- Last month(start), Date, `start = new Date(now.getFullYear(), now.getMonth()-1, 1)`
- Last month(end), Date, `end = new Date(now.getFullYear(), now.getMonth(), 0)`
- str.padStart(len, "0), String, `"5".padStart(2, "0) -> 05`
- `return`, Misc, ends function execution. `const handleSubmit = (e) => if(name === "") return;`
- `return`, Misc, Returns value. `return 0, return true, return xxx`

## Quiz - Array(12/24)

- 12/24 (Array)
