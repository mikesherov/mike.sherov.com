---
title: The Rise of Man In The Middle (MITM) Based Session Hijacking Attacks
date: "2019-11-17T00:00:00.000Z"
description: ""
---

Most websites offer personalized experiences powered by a “logged in” mode. In order to remember who a user is, sites place a cookie containing a unique identifier on the user’s browser. This is known as a **session identifier**. When the browser sends the next request to the site, it automatically includes the session id cookie, identifying the user so the site can customize the experience.

But what if an attacker steals a user’s session id? They’d be able to effectively log in to the site as the victim, viewing their potentially private information. If the site was a bank, this could allow them to make transfers! If it was a social network, the attacker could post on the victim’s behalf, or possibly even change the victim’s password, or email address. This is known as **session hijacking**. There are many ways to hijack a session, but let’s focus in on one of those methods.

A man-in-the-middle attack (often abbreviated MITM) is when an attacker intercepts a request between a user and the site they're connecting to. If that request isn't encrypted, an attacker can read the information it contains. That is, if the session id is unencrypted, a man-in-the-middle can steal it! Back in the "mostly wired" days of the internet, this type of attack was rare because Hacking into a wired connection meant compromising a physical system. However, as free public unencrypted WiFi spread, man-in-the-middle session hijacking attacks became trivial. If you connect to public WiFi, or private WiFi using weak security protocols like **WEP**, the information you transmit over the air is not implicitly encrypted. That means if you connect to a site over http, which is also not encrypted, anyone else connected to that network can read the data you're sending to that site. There are many freely available **packet sniffers** on the market that allow you to walk into a coffee shop, click one button, and see whatever unencrypted websites the other patrons are visiting.

You may be wondering how feasible MITM attacks like this are, as it may seem very rare. However, because this type of attack isn't based on an attacker targeting a specific site, but rather an attacker targeting users on the same network as them, even small and low-value target sites fall victim to this attack. However, it isn't only small sites that have exploitable vulnerabilities; almost every site has them. In fact, even the largest sites in the world were once vulnerable to session hijacking via a man in the middle attack.

Back in 2010, not many sites were fully https only. Sites knew they had to encrypt checkout pages to protect credit card numbers, and they knew to encrypt login forms to protect usernames and passwords; but most sites were still http everywhere else, allowing their session ids to be transmitted back and forth unencrypted in **cleartext**! This was even true for Facebook. That all changed in Oct. 2010 when [**Firesheep** was released](https://techcrunch.com/2010/10/24/firesheep-in-wolves-clothing-app-lets-you-hack-into-twitter-facebook-accounts-easily/) as a Firefox plugin. The software was a specialized **packet sniffer** that looked for unencrypted Facebook session ids, and with a nice, user-friendly UI, provided 1-click access to take over the Facebook account of anyone sharing the insecure WiFi network with the attacker! It was a user-friendly, purpose-built Facebook session hijacker. Firesheep was quickly expanded to support session hijacking on a laundry list of sites including Amazon, Google, Github, Twitter, and many other high profile sites who were vulnerable. **Hundreds of thousands(!!) of people downloaded Firesheep at the height of it's popularity!**

Firesheep very quickly led to the "https everywhere" movement, with the **EFF** releasing the **HTTPS Everywhere** plugin, which changed the default behavior of Firefox to check if a site supported https, and if so, used it for every page on the site, as opposed to just login and credit card forms. While this was a nice workaround for users to fix the problem themselves, it did nothing to prevent the problem for users of other browsers, or those who didn't know about this problem at all. Fairly rapidly, major sites worked to fix this issue by forcibly serving their entire site over https. This also accelerated adoption of [**HSTS**](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security), an **http header** that tells browsers to use https://, even if the user typed in http:// or left the protocol off altogether. A solution emerged: **use https everywhere, redirect all http traffic to https, and use hsts headers so browser won't even make an http request to begin with.**

Ultimately, as web developers it is our duty to provide safe and secure experiences for all. Security should not be an afterthought, and it is our responsibility to ensure the sites we build are as secure as possible. This includes https everywhere. All the old reasons to avoid https are gone. Nowadays, certificates are free via [**Let's Encrypt**](https://letsencrypt.org/) so there's no additional cost. TLS encryption is fast, so there's virtually no performance penalty. There are other, non-security related reasons to use https as well. [http/2](https://www.ssl.com/article/an-introduction-to-http2/), which is a faster protocol than http/1.1, only works over https! There is also a growing list of [https-only browser features](https://www.digicert.com/blog/https-only-features-in-browsers/). Lastly, this will prevent content from being [marked as insecure in Chrome](https://www.blog.google/products/chrome/milestone-chrome-security-marking-http-not-secure/). **Using https is free, performance-friendly, provides good UX, and prevents MITM session hijacking!**

MITM based session hijacking attacks are a real threat to web users. Their prevalence has increased in the age of free public WiFi, and there are many documented, high profile exploits like Firesheep demonstrating their power. Thankfully, serving websites completely over https solves this specific exploit in a free, fast, and secure way. Implement it today!