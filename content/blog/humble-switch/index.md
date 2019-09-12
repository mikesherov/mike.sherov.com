---
title: The Humble Switch Statement
date: "2019-09-05T00:00:00.000Z"
description: ""
---

The switch statement has long been a staple in popular programming languages. It's typically used to execute branching logic by comparing a value against multiple cases, and has at least one way of introducing subtle bugs: fallthrough. In this article, we'll dive deep into the inner workings of this seemingly "simple" bit of syntax in javascript, discover how it works, and find use cases for it's sharp edges. Keep in mind that this is all "toy code", and may not be suitable for use in your codebases considering the relative obscurity of these edges.

## Syntax Definitions

We'll be using precise terms for each bit of syntax, so let's start with some definitions. Consider the following code, and use the table below to map the syntax to it's name:

```
switch('a') {
  case 'b':
    log('c');
    break;
  default:
    log('d');

}
```

| Code     | Term            |
| -------- | --------------- |
| switch   | SwitchStatement |
| 'a'      | discriminant    |
| case 'b' | SwitchCase      |
| 'b'      | test            |
| log('c') | consequent      |
| default  | SwitchDefault   |
| log('d') | consequent      |

## Evaluating Cases and the "Inverted Switch"

In most typical cases, SwitchStatement is used to compared a computed discriminant against multiple literal SwitchCase tests, either integers or strings:

```
function speak(animalType) {
  switch(animalType) {
    case 'dog': return 'woof';
    case 'cat': return 'meow';
  }
}
```

In this snippet above, both `'dog'` and `'cat'` are literal strings, but the JS spec says that SwitchCase tests can be any expression, including function calls! Let's rewrite our SwitchStatement to use function calls:

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

Seeing that we can run functions in our SwitchCase tests, we can now invert the purpose of the SwitchStatement. That is, instead of comparing a variable against a set of literals, we can compare a literal, e.g. `true`, against a set of variables (or function calls)! Consider the following code:

```
function log(logValue, returnValue) {
  console.log(value);
  return returnValue;
}

switch(true) {
  case log('case 1', false):
    console.log('body 1');
    break;
  case log('case 2', true):
    console.log('body 2');
    break;
  case log('case 3', true):
    console.log('body 3');
    break;
}

// output:
// case 1
// case 2
// body 2
```

Examining the output, we can notice that `case 3` is not in the output, because SwitchCase tests are executed in order until one strictly equals the discriminant, and then the corresponding SwitchCase consequent is executed. Seems straightforward, but there are a few more edges that may or may not be expected. Consider the following:

```
function log(logValue, returnValue) {
  console.log(value);
  return returnValue;
}

switch(true) {
  case log('case 1', false):
    console.log('body 1');
    break;
  case log('case 2a', true):
  case log('case 2b', true):
    console.log('body 2');
    // no break here
  case log('case 3', true):
    console.log('body 3');
    break;
}

// output:
// case 1
// case 2a
// body 2
// body 3
```

We've remove the `break` from `body 2`, and added an additional SwitchCase after `case 2`. Notice that our rule still holds: SwitchCase tests are only executed until one strictly equals the discriminant, **even if there is another SwitchCase directly underneath**. Also note that we have introduced a `fallthrough` by not breaking after `body 2`, so that `body 3` is executed. We can conclude the following rule about switch: **switch will execute every SwitchCase test until one strictly equals the discriminant, and then will execute every following consequent, in order, until it encounters a `break` (or `return`).**
