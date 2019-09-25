---
title: The Humble Switch Statement
date: "2019-09-05T00:00:00.000Z"
description: ""
---

The switch statement has long been a staple in popular programming languages. It's typically used to execute branching logic by comparing a value against multiple cases, and has at least one way of introducing subtle bugs: fallthrough. In this article, we'll dive into the inner workings of this seemingly "simple" bit of syntax in javascript, discover how it works, and find use cases for it's sharp edges. Keep in mind that this is all "toy code", and may not be suitable for use in your codebases considering the relative obscurity of these edges.

## Syntax Definitions

We'll be using precise terms for each bit of syntax, so let's start with some definitions. Consider the following code, and use the table below to map the syntax to it's name:

```js
switch ("a") {
  case "b":
    log("c")
    break
  default:
    log("d")
}
```

| Code           | Term            |
| -------------- | --------------- |
| switch { ... } | SwitchStatement |
| 'a'            | discriminant    |
| case 'b'       | SwitchCase      |
| 'b'            | test            |
| log('c')       | consequent      |
| default        | SwitchDefault   |
| log('d')       | consequent      |

## Evaluating Cases and the "Inverted Switch"

In most typical cases, SwitchStatement is used to compared a computed discriminant against multiple literal SwitchCase tests, either integers or strings:

```js
function speak(animalType) {
  switch (animalType) {
    case "dog":
      return "woof"
    case "cat":
      return "meow"
  }
}
```

In this snippet above, both `"dog"` and `"cat"` are strings literals, but that doesn't have to be the case. The JS spec says that SwitchCase tests can be any expression, even function calls. Let's rewrite our SwitchStatement to use function calls:

```js
const getDogType = () => "dog"
const getCatType = () => "cat"

function speak(animalType) {
  switch (animalType) {
    case getDogType():
      return "woof"
    case getCatType():
      return "meow"
  }
}
```

Seeing that we can run functions in our SwitchCase tests, we can now invert the purpose of the SwitchStatement. That is, instead of comparing a variable against a set of literals, we can compare a literal, e.g. `true`, against a set of function calls. Consider the following code:

```js
function log(logValue, returnValue) {
  console.log(logValue)
  return returnValue
}

switch (true) {
  case log("case 1", false):
    console.log("body 1")
    break
  case log("case 2", true):
    console.log("body 2")
    break
  case log("case 3", true):
    console.log("body 3")
    break
}

// output:
// case 1
// case 2
// body 2
```

Notice that `case 3` is not in the output, because SwitchCase tests are executed in order **only until one strictly equals the discriminant** (a.k.a. **"short circuiting"**), and then the corresponding SwitchCase consequent is executed. Any subsequent SwitchCase tests are not executed. This allowed us to "invert" the purpose of the switch! That is, we can compare a literal against a set of functions until one matches. A real world use case for such code might look like this:

```js
function accessControlStatusCode(user, request) {
  switch(true) {
    case request.isForbidden():
      return 403;
    case !user.isLoggedIn():
    case !user.isAuthorized(request):
      return 401;
    default:
      return 200;
  }
```

Note that because order matters, a forbidden AND unauthorized request will display the forbidden error code. Also notice that there is a "fallthrough" from line 5 to line 6 which means that `401` is returned in either case... but maybe we're left wondering if `!user.isAuthorized(request):` is called when `case !user.isLoggedIn():` is already true. That is, we're wondering if `case !user.isLoggedIn(request):` still "short circuits". Let's find out:

```js
function log(logValue, returnValue) {
  console.log(value)
  return returnValue
}

switch (true) {
  case log("case 1", false):
    console.log("body 1")
    break
  case log("case 2a", true):
  case log("case 2b", true):
    console.log("body 2")
  // no break here
  case log("case 3", true):
    console.log("body 3")
    break
}

// output:
// case 1
// case 2a
// body 2
// body 3
```

Our rule still holds! SwitchCase tests are only executed until one strictly equals the discriminant, even if there is another SwitchCase directly underneath. Also note that we have introduced a "fallthrough" by not breaking after `body 2`, so that `body 3` is executed! We can conclude the following rule about switch: **switch will execute every SwitchCase test until one strictly equals the discriminant, and then will execute every following consequent, in order, until it encounters a statement like `break`, `return`, or `continue`.** This rule makes for very interesting patterns when used intentionally, as you're about to see.

## Fallthrough

Several of the examples we've seen so far contain fallthroughs. At first glance, fallthrough just looks like one giant bug waiting to happen. With fallthrough, consequents that don't end in a control flow statement like `break;` will then execute the next `consequent`, which is often a bug:

```js
function speak(animal) {
  let sound
  switch (animal) {
    case "dog":
      sound = "woof"
    case "cat":
      sound = "meow"
  }

  return sound
}
```

Oops, now `speak('dog') === 'meow'`! This type of bug is so common that most linters include a rule for switch statements that forbids fallthrough unless a comment `// falls through` is added calling it out as intentional. If it's so error-prone, why does switch even have fallthrough? We can say for sure that sequential SwitchCase's (i.e. back-to-back SwitchCases with no consequent separating them) is a useful form of fallthrough, as we saw in our accessControl example, but are there legitimate uses cases for fallthrough after a consequent? The answer lies in the rule we discovered, which we can leverage to **enter a set of transformations of data at any point.** Consider, for example, a time scale conversion function:

```js
function toSeconds(value, term) {
  switch (term) {
    case "years":
      value *= 365
    case "days":
      value *= 24
    case "hours":
      value *= 60
    case "minutes":
      value *= 60
  }

  return value
}

toSeconds(1, "minutes") // 60
toSeconds(1, "hours") // 3600
toSeconds(1, "days") // 86400
```

This example reveals the true nature of the humble switch statement. In many ways, it resembles a `goto` statement in it's ability to allow you to jump to a specific "label" in a set of statements. `goto` has long fallen out of favor in moden programming languages, and maybe that's a hint that this form of switch statement should remain in obscurity as well. It can be rewritten with a set of if statements or loops, and perhaps that's better because less folks are exposed to purposeful fallthrough today.

## Conclusion

Digging into basic language features is a good way to level up. As you saw, the switch statement is full of surprises. Features like fallthrough, short circuiting, and "inversion" make this statement powerful, but hazardous. Knowing of them will make you a better debugger, but exercising restraint in using them will ensure your code is more understandable and accessible to every member of your team.
