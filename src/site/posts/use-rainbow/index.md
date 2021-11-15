---
title: 'useRainbow()'
date: 2021-11-12
heroURL: /images/hero/code-sober-debug-drunk-hero.png
thumbnail: /images/hero/code-sober-debug-drunk-hero-social.jpg
hidden: true
description: 'Practical snapshot testing tips'
---

Hi there! It's been a long time, I know. I took a break from work and started working on some small, personal projects (toys).

One of those small projects is [potato.horse](https://potato.horse) where I keep all of my doodles, short visual stories and jokes. Check it out!

However, this post is not about my break from work, other experiments, or the site itself. People seem to like one particular technique I used in the design, notably, the backround effect applied when the user scrolls, browses the content:

<video src='/images/use-rainbow/use-rainbow-scroll-animation.mp4' muted autoplay loop controls></video>

A bunch of people asked me how this effect was implemented, so here's a quick gist, plus some context:

```typescript
import { useEffect } from 'react'

export const useRainbowBg = () =>
    useEffect(() => {
        const cb = () => {
            const viewportHeight = window.innerHeight
            const contentHeight = document.body.getBoundingClientRect().height
            const viewportsPerRotation = Math.min(
                3,
                contentHeight / viewportHeight
            )
            const from = 51
            const to = 219
            const progress =
                window.scrollY / (viewportHeight * viewportsPerRotation)

            const h = from + (to - from) * progress
            document.body.style.backgroundColor = `hsl(${h}deg 100% 50%)`
        }
        window.addEventListener('scroll', cb, { passive: true })
        return () => window.removeEventListener('scroll', cb)
    })
```

How does this work? In short, I translate the scrollPosition into the hue in HSL colour notation.

There are different ways of describing colours in CSS, the two main ones being RBG (e.g. #ff8800 or rgb(255, 200, 00)) and HSL.

// todo

When using RGB we just add the values of the base colour components to achieve the final colour, 100% red + 0 green + 0 blue = red, 100% red, 100% green = yellow and 100% red, green, blue === white.

We're used to this approach but, but specifying colours in terms of hues, saturation and luminosity seems more natural, especially if you come from design background. Or, you know, are a human being using human language. We've gotten used to RGB as developers, but in spoken language using it feels unnatural and confusing. facade would be very hard to use in RGB

HSL is often much easier to work with. For instance if I want to make a colour slightly colder, I can just move the hue slider a bit towards blue and I should get closer to what I have in mind. [*1]

<div class='canvas-example--rgb-hsl'></div>
<script type='module' src='/js/use-rainbow/use-rainbow-example-0.js'></script>

So, what did I mean by saying:

> I translate the scrollPosition into the hue in HSL colour notation.
> -- Rafal, younger by 1 hour

I meant that every time we detect a scroll event, I try to map it to an angle on the hue circle.

<div class='canvas-example--scroll-preview'></div>
<script type='module' src='/js/use-rainbow/use-rainbow-example-1.js'></script>

I don't want to go through all colours, just the ones that seem to look okay-ish with my design (e.g. purple reminds me of cemeteries or 100% red would make me hungry).

// image

And, as long as the basic implementation goes, that's it!

Now, there are three other areas of improvement:

### Performance

We're triggering a repaint on every scroll, so I was a bit worried that older mobile devices, or even high-end laptops plugged in to 4k screens might not be able to maintain solid 60fps. But, I'm happy with the results so far. Using passive event listeners provided a bit of a boost, especially on mobile. If I realise that performance is a problem, especially with more content down the line, these are the areas I'll look into:

-   remove the unnecessary call to getBoundingClientRect on every scroll handler call
-   defer or throttle background colour change (e.g. using requestAnimationFrame)

I expect the first improvement to have some impact, but the benefits of the second should be negligible.

My point is: measure before optimising. Obsess about the performance, when issues become noticeable, be it through drop in framerate or battery impact.

### Perceptual colour space

You might've noticed that in the previous illustrations some fully saturated colours seemed darker than the others. That's because the colour spaces we use normally when coding don't reflect the way the human eye works. I'll leave the explanation to [someone much more experienced than me](https://programmingdesignsystems.com/color/perceptually-uniform-color-spaces/), but suffice to say (gross oversimplification alert!) that generally the same amount of red/green/yellow will appear brighter than blue. This means that in some cases the text on the page will be harder to read.

_For now_, this isn't an issue as I've _just_ put this thing online and titles serve a secondary purpose. But there's a solution to the problem and it's not overly complicated: use a perceptual colour space. There's a bunch of libraries that do it out of the box, both in JS/TS and CSS/SASS/`<pick your CSS flavour here>`. `hsluv` seems like a good starting point.

## Accessiblity

Note that I'll be focusing on the visual effect itself and not discuss the rest of the site (e.g. alt tags, document structure, etc...). I'd like to focus on contrast, colour blindness and people who rely on `prefers-reduced-motion`. The site is a working document, there's always so much to improve. For instance, contrast can be an issue in a few, non-critical places. I'm happy to accept feedback and implement it: [hit me up!](/posts/hi).

I wanted to make sure that the effect doesn't break the site completely for people with colour blindness. I focused on the most common types: Deuteranomaly and Protanomaly (red-green colour blindness), but ran wider tests. I used Photoshop and [Colorblindly (Chrome extension)](https://github.com/oftheheadland/Colorblindly) for basic tests.

### `prefers-reduced-motion`

This site doesn't contain many animations (besides the Little Sausage Angels you'll see if you hit 'Share'), but I was wondering if people who rely on this setting would prefer the background colour to not rotate.

The short answer is: I don't know, my intuition is that rotating colours doesn't really qualify as motion, but my experience and understanding of the problem is, to say the least, limited. Please [reach out](/posts/hi) if you have an opinion about that.

## Summary

I love how playful and not serious the mid 90s/Geocities web felt and I wanted to incorporate some of this look and feel in the site. But still, I didn't want to make it feel cluttered, I wanted decent UX on mobile and desktop. Plus, some space for easter eggs (something you can't do when living in a strange and abusive relationship with social media we've grown so accustomed to).

I remember that I had build 6 websites before I even had access to the Internet for the first time. Now, after being burned out for 3 years, even considering changing my job, it was the first time I genuinely enjoyed coding. Fuck, I forgot how much fun it was!

-   1 It's not perfect, since the perceptual colour space differs from what's described using RGB/HSL.

PS. https://www.cameronsworld.net/
