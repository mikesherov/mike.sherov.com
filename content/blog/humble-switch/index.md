---
title: The Humble Switch Statement
date: "2019-09-05T00:00:00.000Z"
description: ""
---

The switch statement has long been a staple in popular programming languages. Used to execute branching logic by comparing a value against multiple cases, it's known to be a fairly straightforward piece of syntax with a at least one way of introducing subtle bugs: fallthrough. In this article, we'll dive deep into the inner workings of this seemingly "simple" bit of syntax in javascript, discover exactly how it works, and find use cases for it's surprisingly sharp edges.

## Evaluating Cases

In most typical cases, switch is used to compared a value against multiple literal values, either integers or strings:

```
function speak(animalType) {
  switch(animalType) {
    case 'dog': return 'woof';
    case 'cat': return 'meow';
  }
}
```

In this snippet above, both `'dog'` and `'cat'` are literal strings, but the JS spec says that can be any expression, including function calls! Let's rewrite our switch, showing that we can run arbitrary functions in the case statement:

```
const getDogType = () => 'dog';
const getCatType = () => 'cat';

function speak(animalType) {
  switch(animalType) {
    case getDogType(): return 'woof';
    case getCatType(): return 'meow';
  }
}
```

Once realizing that we can run functions in our `case statements`, we can now invert the purpose of the switch statement. That is, instead of calculating a result and then comparing it to static values, we can compare a static value, e.g. `true

Realizing that case statements evaluate expressions and not just literal values, we're left with 2 more questions: "when are these expressions evaluated? In what order?". To answer this, consider the following code which compares a bunch of cases against the value `true`. That is, the **first** `case statement` that returns true will have it's `case body` executed:

```
function log(logValue, returnValue) {
  console.log(value);
  return returnValue;
}

switch(true) {
  case log(1, false):
    console.log('case 1');
    break;
  case log(2, false):
  case log(3, false):
    console.log('case 2 or 3');
    break;
  case log(4, true):
    console.log('case 4');
  case log(5, true):
    console.log('case 4 or 5');
    break;
}
```

The switch statement above compares cases against the value `true`. Execu
