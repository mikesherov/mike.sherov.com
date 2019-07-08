---
title: Response to “Enabling Modern JavaScript on npm”
date: "2019-06-04T00:00:00.000Z"
description: ""
---

## The Problem

In [a recent blog post](https://jasonformat.com/enabling-modern-js-on-npm/), Jason Miller lays out a problem:

1. given that the average JS application is composed of >50% 3rd party JavaScript,
2. And given that 3rd party code (which we’ll call library code) on npm still typically targets ES5 because it’s still the lowest common denominator,
3. And given that ES6 is more expressive and has a larger set of builtin functionality so it results in much smaller code than ES5,
4. **That the average application, even if the first party code (which we’ll call application code) is ES6 and not transpiled to ES5, is much larger than it needs to be!**

## The Solution Landscape

Central to any solution here is the notion that library authors must feel free to publish ES6+ as the new lowest common denominator. Yes, it’s important to solve differential building across any version of JS, but I would specifically call out the ES5 - ES6 cliff as uniquely important because ES5 is the “Nevergreen Cliff”. That is, the last browser that isn’t Evergreen is IE11, and it doesn’t support ES6. All other version disparities will play out on shorter timescales with likely less urgency. Even still, a generic solve for any version of JS is important here. There will always be more cliffs.

We must also identify the players here:

1. Application developers, who need good tooling defaults so that they get small application bundles that still match their browser support statements.
2. Library authors, who need a reasonable guarantee from tooling authors that tooling will make it essentially effort-free for app devs to consume ES6, lest they get blowback and support burden from app devs who still need ES5.
3. Compiler authors, specifically Babel, Buble, TS, who need to know that if they can make it effort free for devs to consume es6, that the library authors will agree to actually publish ES6 as the main npm artifact of the library.

## Solution Part 1 - Transforming node_modules

The crux of the problem is that the current class of compilers (we’ll use Babel as the example considering its prominence) don’t touch node*modules by default. Unless you explicitly tell Babel to, it won’t compile your node_modules. There’s good reason for this. 3rd party node_modules are all already valid es5, so running the compiler on them are effectively no-ops, and it slows your build to attempt to compile something that doesn’t need it! Also, because Babel isn’t just a JS to JS compiler and it in fact has a rich plugin ecosystem and you may be using experimental proposals in your code or React transforms in your code, running those transforms over node_modules doesn’t make sense \_either*.

With this understanding, let’s take a step back now and imagine what we’d _want_ Babel to do to enable the ecosystem to move onto es6:

1. Allow an app dev to specify target environment (available today as babel-preset-env). That is, an app should be able to say “no matter what version of JS all my code + dependencies are, I want to transform that to whatever version of JS is the lowest common denominator of these browsers / environments”.
2. Allow an app dev to specify other transforms to run on 1st party (or 2nd party) code. That is, in addition to saying what version of JS the output should be, the app dev should be able to say “my 1st party code is
   actually JSX, and also, these specific packages in node_modules I rely upon are actually TS”, etc.
3. Take all known stage 4 transforms (that is, all transforms that cam turn any ES6+ code to ES5), remove the transforms are not required by your target environment, and run those over all node_modules that aren’t already handled by step 2 above.

This would means that library authors who are using TS or Flow or JSX still have to transpile to JS, but not necessarily ES5! The library author becomes free to publish ES6 on the knowledge that prevalent tooling will downlevel their JS to the correct target.

Now, from a correctness perspective, I think this’d work, but how do we address build performance issues? As mentioned above, suddenly compiling all node_modules will definitely slow down builds. If library authors were willing to publish a machine readable file announcing what version of JS they are, similar to the “engines” field of package.json, Babel would be able to bail out of transpiling if it could determine that the library is a version of JS that is less than or equal to the version required by the application. In fact, Babel could theoretically produce this file. It could have a mode where instead of actually transpiling to es5, it just notes what transforms would not be no-ops and write those to a file, to be consumed by a future run of Babel later. For simplicity’s sake though, perhaps it’s simpler to write “ES2019” than “polyfill Array.flat, and run all ES2018 transforms, and...” This file would also help detect if the JS version of the library is a version that your version of Babel doesn’t yet transpile, and can warn the application dev to upgrade.

## Solution Part 2 - ES6 Readiness Day

With Babel and the other compilers now behaving as described, we’d set our sights to library authors. How do we get them to stop shipping ES5, now that the compilers can help out here?

While we may think of npm as a vast sprawling treasure trove of dependencies at our fingertips, in reality, there are some _really really_ common dependencies out there that make up a huge percent of what gets shipped to browsers these days: https://www.npmjs.com/browse/depende

If we could convince the top most depended on packages to switch, couldn’t we say we achieved the mission?

Thankfully, there is prior art... “Can I Use Python 3?” This is what happened with Python 3. Python 3 was a huge jump from Python 2, and for years the community was frozen on Py2 because very popular packages weren’t shipping Py3 yet. The community eventually banded together and began publishing websites that simply listed the top Python packages and whether they yet supported Py3: http://py3readiness.org/ https://python3wos.appspot.com/

Perhaps as a community, we could do similar... armed with buy in from the compiler ecosystem and a single request “please ship es6 instead of ES5, and the compilers will downlevel for you if necessary”, we throw up a site that tracks progress towards this goal for the top 500 npm packages. We set a date to shoot for. We declare Jan 1st 2020 (or some more reasonable date) as the date to strive for 50% (or some more reasonable percent). Of course, you can probably just get a commitment from the top 20 and a handful of profilic publishers and that’d be a huge head start :-)

## Putting it All Together

In summary, if we first made sure compilers could transform any version of actual JS in node_modules (stage 4 syntax w no custom transforms) to the version required by the app dev, it unblocks library author’s ability to now publish in es6 without making app devs jump through configuration hoops to get a dependency. If we also provide a common format for libraries to declare the version of JS they are, we can overcome build speed issues. With that unblocked, we socialize the goal and get public commitments from top lib authors to move to es6 on an aspirational timeframe. Hopefully one day soon, downleveling to ES5 will seem as unnecessary as downleveling to ES3!

It would involve getting broad support from compilers (not just Babel, but also pika, Buble, Typescript, And others, along with maybe installers like Yarn or npm), and top package authors, and community advocates to band together. It wouldn’t be easy, but if we got agreement, it would work.

Of course, there is some nuance missing in the descriptions above, but as an overall strategy, this seems like a clear way to move the ball forward that isn’t “just wait for IE11 to die.” Because even then, with the ES5 cliff behind us, there will always be future cliffs, even if they are less severe.

Thoughts?
