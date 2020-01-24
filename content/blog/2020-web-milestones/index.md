---
title: 2020 Web Milestones
date: "2020-01-23T23:21:30.000Z"
description: ""
---

_Article Status: a work in progress, expected to be shaped and augment throughout 2020. Think of this more as a wiki page than a fully formed article._

The other day, as I watched Chromium Edge roll out, I thought to myself "end of an era. A huge milestone in the history of the Web". I then stepped back and realized that there's actually **a few** big things happening this year. Inspired, I fired off a tweet asking about big upcoming Web changes. **It turns out, a lot of big stuff is happening this year,** and this post will attempt to document most of it. I encourage you to [submit pull requests here](https://github.com/mikesherov/mike.sherov.com/tree/master/content/blog/2020-web-milestones) to help welcome in the new and eulogize the old. With further ado, the list:

### January

* (-) **Windows 7 EOL** - The second largest version of Windows with the lion's share of remaining IE11 users. Hopefully its end of life prompts users to move to Windows 10 and off IE11.
* (-) **EdgeHTML Rendering Engine EOL** - Now that Edge is powered by Chromium, we have lost a renderer in the market. Moves the ecosystem from 4 main rendering engines "EdgeHTML, Webkit, Gecko, Blink" to 3 "Webkit, Gecko, Blink".
* (+) **Chromium Edge Released** - With Chromium Edge, folks on Windows 7 and Windows 8.1 finally have an upgrade path to a modern browser while still having IE Mode so legacy enterprise sites that require IE11 still work.
* (+) **Flow Rendering Engine and Browser Released** - Just as we said goodbye to EdgeHTML, a new rendering engine and browser popped onto the scene: https://www.ekioh.com/flow-browser/ Moves the ecosystem from 3 main rendering engines "Webkit, Gecko, Blink" right back to 4 "Webkit, Gecko, Blink, Flow".
* (+) **Web Components Everywhere** -  With Chromium Edge's release, all major browser vendors are shipping Web Components V1, as per: https://www.webcomponents.org/
* (+) **ES Modules With Conditional Exports Unflagged in Node** - It's been almost 5 years since ES Modules were standardized, but compatibility issues between Common JS (the module system used in Node) and ESM prevented much progress for a long time. Finally, there is a path forward for Node Ecosystem to iteratively and deliberately migrate to ESM, unlocking "Universal" javascript for all. You owe the NodeJS modules team (https://github.com/nodejs/modules) a high five for making this happen.
* (+) **Deno goes 1.x** - Deno is shaping up to be "the other server side javascript runtime". Offering native Typescript Support, a default Secure environment, intentions to align with Web Standard APIs like addEventListener and others, and other philosophical differences from Node. Should be interesting to see how Deno influences Node and/or carves out it's own space.

### February

* (-) **Goodbye CSRF, Hello Default SameSite Cookies** - Browsers default policy has always been "when making a request to example.com, send cookies for exmaple.com, **even** if the request originates from a site other than example.com". This behavior enables a security vulnerability and tactic called CSRF, where an attacker can trick you into visit their site while you're logged into example.com and then make malicious requests on your behalf. On Feb. 4th, this default behavior is changing to "when making a request to example.com, send cookies for exmaple.com, **only** if the request originates from example.com". The number of CSRF vulnerable websites this fixes is immeasurable, but a whole class of vulnerability will suddenly stop working for attackers on this day. **HUGE**.

### April

* (-) **Python 2 EOL** - Books will be written about the Python community's long painful transition to Python 3. But finally it will be a **history** book as of April 20th.

### December

* (-) **Flash EOL** - Adobe Flash pushed the entire web forward and served as a wakeup call to the Web community. You can probably say that HTML5 and a lot of the improvements to the Web that happened around that time were a direct response to Flash's capabilities. All video sites, gaming sites, etc. ran Flash. Over time, the Web caught up (mostly), and Flash was banned from the iPhone, which practically forced the Web community to move on. Flash languished for 10 years, mostly appearing in headlines about it's many security vulnerabilities. It's EOL is December 31st. I'll miss Flash.

### Sometime This Year

* (+) **http/3 Ships Unflagged in Major Browser** - Chrome, Firefox, and others are already shipping http/3 behind flags. Major CDNs like Cloudflare have support. Work is going on right now to bring http/3 to Node. At some point, it'll hopefully get unflagged this year, and we'll shave another few % of latency off the average http request.

* (+) **PHP 8 with JIT** - PHP as a language and community is still productive and kicking. This year will see PHP move to a JIT which has potentially promising implications for performance, above and beyond all the impressive speed gains in the language since 7.0.
