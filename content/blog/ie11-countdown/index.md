---
title: How to Kill IE11 - What the Deaths of IE6 and IE8 Tell Us About Killing IE
date: "2019-07-09T00:00:00.000Z"
description: ""
---

"Internet Explorer needs to die."

This phrase has been uttered by countless software developers throughout the ages, but never has that statement been truer than it is right now. IE11 is the last mainstream browser that does not support ES6, a major update to JavaScript. The web has always worked on the principle of progressive enhancement, so this normally wouldn't be a problem, but the average JS app now leverages packages from the npm registry, and we find ourselves in a weird place. Even if our own app code is written in ES6+, most of the modules we rely upon are [still targeting IE11 and ES5](/enabling-modern-javascript), and bring along bloated code and polyfills. **IE11 needs to die** so that module authors can ship small, faster ES6 by default, which benefits all of us!

In order to understand how best to kill IE11, we need to look back to how 2 previous versions of IE met their fate: IE6 and IE8. By examining the strategies employed to kill browsers, we can look at current efforts to sunset IE11. We can predict and evangelize for what may ultimately do it in, finally freeing the JS community from the burden of ES5.

## Who Killed IE6?

The year was 2009 and Microsoft had a problem. Having released IE7 and IE8's release right around the corner, IE6's market share was still stubbornly high. You see, by that point IE6 had become a bit of bad branding for Microsoft, a symbol of the web's stagnation during IE6's dominance since it's release in 2001, and a clearly inferior product to Firefox and Chrome, both of which had begun to make [serious dents](http://gs.statcounter.com/browser-version-partially-combined-market-share#monthly-200901-200901-bar) in IE's dominant market position. Compounding this problem was the many enterprise Windows clients who needed to stay on IE6 or IE7, having built web applications that only worked with their quirks. **Microsoft needed a way to bury IE6 in a way that allowed enterprises to maintain their support.**

### Suspect 1: Automatic Upgrades to IE8

Knowing its users wouldn't upgrade on their own, Microsoft [announced](https://blogs.msdn.microsoft.com/ie/2009/04/10/prepare-for-automatic-update-distribution-of-ie8/) that in July 2009 it would automatically upgrade IE6 and IE7 users to IE8 via Windows update. Coupled with this upgrade were two affordances for enterprise users: the ability to [block the automatic upgrade](https://blogs.msdn.microsoft.com/ie/2009/01/06/ie8-blocker-toolkit-available-today/) and a "compatibility mode" that allowed pages that were broken in IE8 to use IE7's rendering engine. So, was it successful? As you can see [here](https://www.w3counter.com/trends), from 6/09 to 7/09, IE6 usage dropped from 24.6% to 15.6% in one fell swoop. It has [been](https://blog.chriszacharias.com/a-conspiracy-to-kill-ie6) [widely](https://tidbits.com/2019/05/06/how-rogue-youtube-employees-killed-internet-explorer-6/) [reported](https://www.theverge.com/2019/5/4/18529381/google-youtube-internet-explorer-6-kill-plot-engineer) [that](https://www.techspot.com/news/79940-how-youtube-employees-killed-internet-explorer-6.html) the drop was due to a Youtube banner asking users to upgrade from IE6 to other browsers, and while that may have persuaded some users, the simple truth is that auto upgrade was the reason for this shift, and not armies of workers asking their bosses to upgrade.

### Suspect 2: IE6 Countdown

In March of 2011, in seeing that auto upgrades to IE8 had a meaningful impact but that worldwide usage was still too high at 12%, Microsoft launched a marketing campaign to garner support for killing IE6. [ie6countdown.com](http://web.archive.org/web/20110304205645/http://ie6countdown.com/) launched to say goodbye to IE6, track its demise, and to announce to the world that Microsoft themselves didn't want it around anymore. The goal was to get worldwide usage under 1%. Yet by [June 2014](http://web.archive.org/web/20141002004225/https://www.modern.ie/en-us/ie6countdown), usage was still stubbornly high at 3.8%. However, there was a silver lining: most countries **were** <1% with the exception of China, which hovered at 12.5%. In order to finally get IE6 below 1% worldwide, something would have to happen to force Chinese users to upgrade.

### Suspect 3: POODLE

At the time, most sites supported both SSL and TLS, two separate protocols that were used to power "https://" connections, with TLS being a safer, more modern protocol. That all changed on October 14th, 2014, when the Google Security Team announced a new vulnerability in SSL called [POODLE](https://www.openssl.org/~bodo/ssl-poodle.pdf). POODLE effectively
rendered all of the ciphers supported by SSLv3 unsafe, which meant SSL itself was no longer safe. Major websites like Twitter, and major CDNs like Cloudflare disabled SSL as a [response](https://gigaom.com/2014/10/15/ie6-holdouts-beware-twitter-and-others-kill-ssl-3-0-support-after-poodle-bug-discovery/). **Any browser that could not talk TLS, like IE6, could not connect to those sites!** This was the final blow against IE6, and by November 2014, [worldwide IE6 usage](http://web.archive.org/web/20141218161642/https://www.modern.ie/en-us/ie6countdown) was finally at 1%!

### Verdict

It can be said that automatic upgrades from IE6 to IE8 put a huge dent in IE6 usage, but that POODLE finally put the browser to rest, causing major sites to literally block it from connecting. Let's compare this to how IE8 met its fate.

## Who Killed IE8?

If the death of IE6 was frustrating, the death of IE8 was downright maddening. Yes, IE8 was leaps and bounds ahead of IE6, but IE8 was the last browser to be described as "old IE". IE8 still contained many non standard browser APIs, did not support ES5,was missing most of HTML5, and had no console built-in. If you remember the html5shiv, es5-shim, es5-sham, or alert-driven development, then you understand the pain. For reference, when jQuery finally dropped IE8 it dropped 30% in size. Lucky for the web development community, there were alternatives to IE8 that gave us hope that it may one day no longer plague us.

### Suspect 1: IE9

Having just read that automatic upgrades to IE8 helped kill IE6, you might be tempted to say that IE9 helped kill IE8. Unfortunately, you'd be wrong. For IE6, there was always hope it would die via a simple upgrade because it wasn't a "terminal browser". Terminal browsers can't be upgraded without also upgrading the underlying operating system. Sadly, IE8 was the terminal browser for Windows XP. **That is, if you wanted to upgrade to IE9 from IE8, you had to buy Windows Vista!** That's right, you could get Firefox or Chrome for free... but for the ability to use IE9, you had to pay money to get Windows Vista or a new computer. Because of this, IE9 had little to do with the death of IE8.

### Suspect 2: Chrome

The more obvious conclusion one could draw is that Google Chrome killed IE8. In a way, this is the right answer. Chrome has had an [unbroken rise in market share](http://gs.statcounter.com/browser-version-partially-combined-market-share/desktop/worldwide/#monthly-201001-201907) since its release in 2008. Google plastered Chrome download prompts everywhere, including on its homepage, which also happened to be the most visited page on the internet at the time. Combined with an evergreen release strategy and several innovations above and beyond what other browsers were doing at the time, Chrome became an unstoppable force that pulled market share from everyone. However, this can be at best described as a slow shift. From it's peak of 29% in May 2011, IE8 would stay above 1% worldwide until September 2016.

### Suspect 3: TLS 1.0/1.1 Deprecation

The PCI Security Standards Council is a body responsible for security standards for account data protection. If you want to accept credit cards from your application, you've likely done a PCI compliance audit. On June 30, 2017, the PCI SSC announced that in order to be considered compliant as of June 30, 2018, TLS 1.0 had to be disabled, and that TLS 1.1 was strongly discouraged. In a sense, the shockwaves from attacks like POODLE forced the industry to move onto progressively stronger security protocols. Many CDNs and sites followed suit and dropped TLS 1.0 and 1.1 similar to how they dropped SSLv3 when POODLE was announced. And similar to how IE6 didn't support TLS at all, IE8 only supported TLS 1.0 and TLS 1.1, and was cut off from ever accessing these sites. Once again, stronger security practices blocked IE from a large swath of the internet. This time though, IE8 was already under 1% of internet traffic. The TLS deprecation may have put a final nail in IE8's coffin, but it was already dead.

### Verdict

It seems IE8 died a slow and drawn out death at the hands of Chrome, being stuck as the default browser for XP, destined to stay there until XP itself faded away.

## How NOT to Kill IE11

Putting it all together, we see several strategies from IE6 and IE8 that we can apply to killing IE11 that won't work:

❌ **Marketing Campaigns Like IE6 Countdown:** As far as I can tell, this did little more than tell the world that Microsoft was ready to move on. Not effective. Besides, Microsoft has [already told](https://www.zdnet.com/article/microsoft-security-chief-ie-is-not-a-browser-so-stop-using-it-as-your-default/) the world to get off IE11.

❌ **Other Browsers Eating Market Share:** Chrome is already dominant, and has been for years. At this point in time, IE11's graph looks like IE8's... that is, the competition is eating them at a slow and steady pace. There's nothing more we can do here.

❌ **Increased Security Requirements:** IE11 supports TLS 1.2, which likely won't be deprecated for many years to come. Nothing short of a vulnerability in TLS 1.2 would lead to its early demise. Besides, praying for a vulnerability in TLS to kill IE11 is bad faith! However, we have seen that big sites moving early on deprecations can have outsized impact on the internet as a whole.

So, what CAN we do to kill IE11? What will finally free us of ES5? What will kill the last of truly terminal browsers?

## Killing IE11

As it turns out, the only thing that has ever truly worked is **automatic upgrades**. In order to do that, we saw that IE needs to be non-terminal, as we saw with IE6. We also saw that the replacement browser needs a plan to deal with existing enterprise users, as we saw with compatibility modes. So what do our prospects look like for IE11, assuming Microsft Edge as its replacement?

As of this writing, IE11 is a terminal browser on Windows 7, 8, and 8.1. Fortunately, with the move to Chromium as its rendering engine, Microsoft Edge will come to those versions of Windows, and in fact, [preview builds are already available](https://blogs.windows.com/msedgedev/2019/06/19/introducing-microsoft-edge-preview-builds-for-windows-7-windows-8-and-windows-8-1/). **This will finally unlock the opportunity for automatic upgrades from IE11 to Edge on those platforms!**

As exciting as this prospect is, there are still enterprise customers who need IE11 compatibility that make up a large portion of the remaining IE11 holdouts. Once again, Microsoft is ahead of us and [has already announced](https://www.engadget.com/2019/05/06/microsoft-edge-internet-explorer-mode/) that Edge on Windows 7, 8, and 8.1 will have an "Internet Explorer Mode", which will allow IT admins to implement safe/blocklists for which sites should render using IE11 with the rest of the internet being rendered using Chromium!

Where does this leave us? While it is now technically possible, and it seems like the writing is on the wall, Microsoft has stopped short of announcing an automatic update plan from IE11 to Edge. **All signs point to it being our best shot at being done with IE11 for good.**

## A Call To Action

So, what can **we** do?

First, we have seen that market leaders dropping technologies will cause shifts in browser usage. The key here is the technologies must be **dropped** (like SSLv3), and not just suggested to be dropped (like the Youtube IE6 banner). While it may seem unthinkable to suggest that Google, Facebook, and others to block IE11, once Edge comes out for old Windows, there's no good reason to not to force this upgrade. It'll add pressure to Microsoft to consider the auto upgrade idea. **You (yes, you!) can support this movement by declaring you will resolve to block IE11 once Edge arrives on old Windows!**

Second, you can ask your favorite open source package when and if it plans on dropping ES5 as its compile target. Just remember: be nice. Come from a place of curiousity and make no demands. Open source maintainers don't owe us anything, but asking politely about dropping ES5 may help kick up conversations and deprecations that may not have happened otherwise!

Lastly, you can advocate for automatic upgrades on social media using the #killIE hashtag. Microsoft has been very engaged with the web community, and discussing the issue publicly and the community's plans to drop support for IE may very well be a tipping point!

If we are successful, we will look back and say "Microsoft killed IE11 with automatic upgrades to Edge." Finally, we will stop compiling to ES5, and in some cases, stop compiling altogether. Finally, we will stop sending unnecessarily polyfills to browsers that don’t need them. Finally, we will have ES6 everywhere. **Finally, Internet Explorer will be dead.**

_Thanks to [Fred K. Schott](https://twitter.com/FredKSchott) and [Brian Kardell](https://twitter.com/briankardell) for invaluable early feedback on this article._
