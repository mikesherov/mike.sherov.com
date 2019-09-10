---
title: The Switch Statement - Code Smell or Code Belle?
date: "2019-09-05T00:00:00.000Z"
description: ""
---

The switch statement has been a staple in programming languages for a long time. Used to execute branching logic by comparing a value against multiple cases, it's known to have several "footguns" (easy ways to do the incorrect thing while still appearing correct), and has several alternatives. The switch statement has undergone periods of relative popularity and obscurity due to these footguns, a microcosmic example of evaluating tradeoffs in software design. In this article, we'll look at popular arguments both for and against switch statements, expose some good use cases for them, and dive deep into the inner workings of this seemingly "simple" bit of syntax that may surprise you.

## Switch Statement: Code Smell

### Replace with Polymorphism

In _Refactoring_, Martin Fowler comes right out and calls the switch statement a code smell. He argues that switches often are used to switch on an internal property to perform behavior that should instead be represented by inheritance:

```
// BEFORE:
class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    switch(this.type) {
      case 'dog': return 'woof';
      case 'cat': return 'meow';
    }
  }
}

// AFTER:
class Animal {
  speak() {
    return this.word;
  }
}

class Dog extends Animal {
  word = 'woof';
}

class Cat extends Animal {
  word = 'meow';
}
```

This is a perfectly fine example of OOP, and if inheritance heirarchies is your thing this is a fine refactor.

### Replace with Mapped Object Invocation

Switch statements are often used in cases where there is a 1-to-1 direct map between values and what code to run as a result. Consider:

```
switch(action) {
  case 'speak':
    this.speak();
    break;
  case 'sit':
    this.sit();
    break;
  case 'stay':
    this.stay();
    break;
}
```

With this bit of code, there is a direct link
