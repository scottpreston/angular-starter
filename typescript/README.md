# Typescript

1. ES5 & ES6
2. TypeScript Overview
3. Static Types
4. Interfaces, Classes, Enums, Modules, Namespaces
5. tsconfig.json

## ES5

A simple `object` with ES5.

```javascript
var o = {};
var oo = {
    foo: function() {
        return 'bar';
    }
};
var ooo = function() {
    this.foo = function() {
        return 'barbar';
    }
};
```

## ES6

There's a lot of differenes.

### Classes

So you can still create `objects` the old fashiond way, but you can also create classes.

```javascript
class Hello {
  constructor() {
    console.log('hello world!');
  }
}
var a = new Hello();
```

Notce when you type `babel es6-classes.js`. Hint: This is the transpiled output.

### Constants

There's a few more variable types now besides `var`, there's `let` and `const`.

```javascript
const PI = 3.14;
console.log(PI);
PI = 3.142; // ERROR

let pi = PI;
pi = 3.142;
console.log(pi);
```

### Arrow Functions

A different way of expressing functions

```javascript

const foo = (bar) => {
    console.log(bar);
}

```

### Different Collection Types

So rather than everything being an `Array` you now have `Map` and `Set`. 

```javascript
let s = new Set()
s.add("hello").add("world").add("hello")
console.log(s.size)
console.log(s);

let m = new Map()
m.set("hello", new Date());
m.set("world", new Date())
console.log(m)
```

## TypeScript

First install it

`npm install -g typescript`

To run via node:

`npm install -g ts-node`

My first TS file:

```typescript
function hello(person: string) {
    return "Hello, " + person;
}

console.log(hello('Scott'));
```

Note the syntax `variableName` : `type`.

Compiled output:

```javascript
function hello(person) {
    return "Hello, " + person;
}
console.log(hello('Scott'));
```

### TypeScript Types

```typescript
//boolean
let isDone: boolean = false;

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string
let color: string = "blue";

//array
let list: number[] = [1, 2, 3];

// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK

//enum
enum Color {Red, Green, Blue}

// any
let notSure: any = 4;
```

### Interfaces

Just like in Java.

```typescript
interface Point {
    x: number;
    y: number;
}

let p1: Point = { x: 10, y: 20 };

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

```

### Classes

Types matter but you don't need to specify a return type on functions.

```typescript
class Foo {
    bar: string;
    getStuff() {
        return 123;
    }
    getBar() {
        return this.bar;
    }
}

const f = new Foo();
f.bar = "hi there";
console.log(f.getStuff());
console.log(f.getBar());
```

### TSConfig.json

This is the configuration file for the typescript compiler or `tsc`. 

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": true,
        "target": "es6",
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    },
    "include": [
        "ts/*"
    ]
}
```