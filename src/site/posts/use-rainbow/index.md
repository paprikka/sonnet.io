---
title: 'useRainbow()'
date: 2021-11-18
heroURL: /images/hero/use-rainbow.png
thumbnail: /images/hero/use-rainbow-social.jpg
hidden: false
description: 'A quick note about the rainbow effect used on potato.horse and colour spaces'
---

Hi there! It's been a long time, I know. I took a break from work and started working on some small, personal projects (toys).

One of those small projects is [potato.horse](https://potato.horse) where I keep all of my doodles, visual short stories and jokes. Check it out!

However, this post is not about my break from work, other experiments, or the site itself. People seem to like one particular technique I used in the design, notably, the backround effect applied when the user browses the content:

<video src='/images/use-rainbow/use-rainbow-scroll-animation.mp4' muted autoplay loop controls></video>

Some asked me how this effect was implemented (including going as far as reading the minified code, which is very flattering).

So, here's a quick gist, followed up with some context:

```typescript
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
            const progress =
                window.scrollY / (viewportHeight * viewportsPerRotation)
            const h = (from + 360 * progress) % 360

            document.body.style.backgroundColor = `hsl(${h}deg, 100%, 50%)`
        }
        window.addEventListener('scroll', cb, { passive: true })
        return () => window.removeEventListener('scroll', cb)
    })
```

In short, I map the _scroll position_ into the _hue_ in the HSL colour notation. Let's break this down.

### Colour models

There are many ways of describing colours in CSS, with the two most common ones being RGB (left) and HSL (right):

<div class='embed example-rgb-hsl'></div>

RGB is an additive colour palette. This means that mixing 100% of red, green and blue will produce white, mixing 100% red and 100% green but 0% blue, will produce yellow and so on. This is different from, say, using oil paint or the [CMYK colour model](https://en.wikipedia.org/wiki/CMYK_color_model), where the resulting tone would be black(-ish)<a href='#footnote-1' class='footnote'>1</a>.

We're used to this approach because it's easy to describe in code but specifying colours in terms of hue, saturation and luminosity seems more natural, especially if you come from a design background, or... you know, are a human being using a human language.

We've gotten used to RGB as developers, but in spoken language using it would feel unnatural and confusing. [Façade](http://facade.photo) would be very hard to use in RGB.

On the other hand, HSL can often be much more intuitive to work with. For instance if I want to make a colour slightly colder, I can just move the hue slider a bit towards blue and I should get closer to what I have in mind. With RGB if we make the colour appear colder by including more blue, the resulting tone will be a bit brighter as the blue component contributes to the overall lightness. This means that you'd have to lower the red and green values to compensate.

To see how this works in practice, try maxing out the blue colour in the example below.

<div class='embed example-hue-shift-rgb'></div>

The first thing that stands out is that all tones are shifted towards blue and the overall brightness of the picture is increased. In the case of the effect we're discussing, that would be undesirable.

Now, let's try to do the same with the HSL colour circle. Drag the slider to the left, by **ca. 90 degrees:**

<div class='embed example-hue-shift-hsl'></div>

In this scenario using HSL not only _turns Susan into a vampire_, but also maintains a similar<a href='#footnote-2' class='footnote'>2</a> level of brightness. And that's exactly what I'm looking for.

So, what did I mean by saying:

> How does this work? In short, I map the _scroll position_ into the _hue_ in the HSL colour notation.
> <cite>Rafal, 2 days earlier</cite>

I meant that every time we detect a scroll event, I try to map it to an angle on the hue circle:

<div class='embed example-scroll'></div>

I didn't want to start with red as it would make me hungry and the base yellow fits the design a bit better, so I applied a small initial shift, hence `const from = 51` set as the initial offset.

And, as far as the basic implementation goes, that's it!

Now, there are three other areas of improvement:

### Performance

We're triggering a repaint on every scroll, so I was a bit worried that older mobile devices, or even some hi-end laptops plugged in to 4k screens might not be able to maintain solid 60fps. But, I'm happy with the results so far. Using [passive event listeners](//developers.google.com/web/updates/2016/06/passive-event-listeners) provided a bit of a boost, especially on mobile.

When/if I realise that performance is a problem, especially with more content down the line, I'll probably focus on these areas first:

-   removing the unnecessary call to `getBoundingClientRect` on every scroll handler call
-   deferring or throttling background colour changes using `requestAnimationFrame`

I expect the first improvement to have some impact, but the benefits of the second one should be negligible.

Measure before optimising. Obsessing about the performance only makes sense when issues become noticeable, be it through a drop in framerate or battery impact. Your iPhone Pro has more computing power than many low-end laptops, so it's a good idea to test on those devices too. It's good to have a crappy old Android phone exacly for that purpose if you can spare a few quid.

### Perceptually uniform colour spaces

You might've noticed that in the previous illustrations some fully saturated colours seemed darker than the others. That's because the colour spaces we use normally when coding don't reflect the way the human eye works. I'll leave the in-depth explanation to [someone much more experienced than me](https://programmingdesignsystems.com/color/perceptually-uniform-color-spaces/), but suffice to say (gross oversimplification alert!) that generally the same amount of red/green/yellow will appear brighter than blue. This means that in some cases the text on the page will be harder to read.

<div class="use-rainbow__rainbow">
  <div class="use-rainbow__column use-rainbow__column--hsl">
    <div class='use-rainbow__column-title'>HSL<br>⬇</div>
    <div class="use-rainbow__swatches">
      <div style="background-color: hsl(0, 90%, 60%)"></div>
      <div style="background-color: hsl(24, 90%, 60%)"></div>
      <div style="background-color: hsl(48, 90%, 60%)"></div>
      <div style="background-color: hsl(72, 90%, 60%)"></div>
      <div style="background-color: hsl(96, 90%, 60%)"></div>
      <div style="background-color: hsl(120, 90%, 60%)"></div>
      <div style="background-color: hsl(144, 90%, 60%)"></div>
      <div style="background-color: hsl(168, 90%, 60%)"></div>
      <div style="background-color: hsl(192, 90%, 60%)"></div>
      <div style="background-color: hsl(216, 90%, 60%)"></div>
      <div style="background-color: hsl(240, 90%, 60%)"></div>
      <div style="background-color: hsl(264, 90%, 60%)"></div>
      <div style="background-color: hsl(288, 90%, 60%)"></div>
      <div style="background-color: hsl(312, 90%, 60%)"></div>
      <div style="background-color: hsl(336, 90%, 60%)"></div>
    </div>
  </div>
   <div class="use-rainbow__column use-rainbow__column--hsluv">
    <div class="use-rainbow__swatches">
      <div style="background-color: #f75782"></div>
      <div style="background-color: #eb6a2c"></div>
      <div style="background-color: #c0852b"></div>
      <div style="background-color: #a5902b"></div>
      <div style="background-color: #88992b"></div>
      <div style="background-color: #56a22b"></div>
      <div style="background-color: #2da46b"></div>
      <div style="background-color: #2ea28b"></div>
      <div style="background-color: #2fa09f"></div>
      <div style="background-color: #319db4"></div>
      <div style="background-color: #3498d6"></div>
      <div style="background-color: #7e86f4"></div>
      <div style="background-color: #c16af4"></div>
      <div style="background-color: #f43ae8"></div>
      <div style="background-color: #f64cb6"></div>
    </div>
      <div class='use-rainbow__column-title'>⬆<br>HSLUV (perceptually uniform) </div>
  </div>
</div>

_For now_, this isn't an issue as I've _just_ put this thing online and titles serve a secondary purpose. But there's a solution to the problem and it's not overly complicated: use a perceptually uniform colour space. There's a bunch of libraries that do it out of the box, both in JS/TS and CSS/SASS/`<pick your CSS flavour here>`. [`hsluv`](https://www.hsluv.org) seems like a good starting point.

### Accessiblity

Note that I'll be focusing on the visual effect itself and not discussing the rest of the site (e.g. alt tags, document structure, etc...). I'd like to focus on contrast, colour blindness and people who rely on `prefers-reduced-motion`. The site is a living document, there's always so much to improve. For instance, contrast can be an issue in a few, non-critical places. I'm happy to accept feedback and implement it: [hit me up!](/posts/hi).

### Colour blindness

I wanted to make sure that the effect doesn't break the site completely for people with colour blindness. So I focused on the most common types: Deuteranomaly and Protanomaly (red-green colour blindness), but also ran wider tests. I used Photoshop and [Colorblindly (Chrome extension)](https://github.com/oftheheadland/Colorblindly) for some rudimentary checks.

### `prefers-reduced-motion`

> The **prefers-reduced-motion** CSS media feature is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses.
> <cite> [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)</cite>

This site doesn't contain many animations (besides the _Little Sausage Angels_ you'll see if you hit 'Share'), but I was wondering if people who rely on `prefers-reduced-motion` would like the background colour to stay constant.

The short answer is: I don't know. My intuition is that rotating colours doesn't really qualify as motion, but my experience and understanding of the problem is, to say the least, limited. In situations like this I'd rather depend on user research instead of guesses.

Luckily, the site had its five minutes of fame on Reddit which proved to be a decent opportunity to collect feedback. None of the users brought up an issue with the background effect so far. I'm also lucky enough to know a bunch of accessibility specialists, such as [Sandrina Pereira](https://twitter.com/a_sandrina_p). Her suggestion was that a) background animations definitely qualify as motion, b) perhaps the effect feels natural because it's a direct result of a user interaction.

## Summary

The late 90s/Geocities web felt playful and weird. It was fun in an uninhibited, somewhat less performative, way. I wanted to incorporate some of this look and feel in the site. But still, I didn't want to make it feel esoteric to the point where you'd need to up your hipsterdom-level to 9000 and browse it exclusively throught Netscape 7. All of that, while listening to the new Nirvana: Unplugged.

I still wanted decent UX on mobile and desktop, and some space for easter eggs (something you can't do when living in the strange and abusive relationship with social media we've grown so accustomed to).

As a kid I had build 6 websites before I even got access to the Internet for the first time. Now, after being burned out for 3 years, even considering changing my job, it was the first time I genuinely enjoyed coding. Fuck, I forgot how much fun it was.

Now, go out, pet your cat and make some shit!

<hr>

PS. Check [https://www.cameronsworld.net/](https://www.cameronsworld.net/)

PPS. The code for interactive diagrams can be found [here](https://github.com/paprikka/use-rainbow-article-examples)

### Footnotes

1. <span id='footnote-1'></span>hence the K component in CMYK meaning black. Using B would be confusing as it means black in other colour models.
2. <span id='footnote-2'></span>it's not perfect, since the perceptual colour space differs from what's described using RGB/HSL.

<style>
    @import '/js/use-rainbow/style.css';
    .use-rainbow__rainbow{
        display: flex;
        flex-direction: column;
    }
    .use-rainbow__column-title {
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
        line-height: calc(var(--ru) * 2rem);
        margin: calc(var(--ru) * 1rem) 0;
     }
    .use-rainbow__swatches {
        display: flex;
        justify-content: space-between;
    }
    .use-rainbow__swatches div {
        height: 3rem;
        flex: 1;
    }
    .example-hue-shift-rgb, .example-hue-shift-hsl {
        max-width: 35rem;
        margin-left: auto;
        margin-right: auto;
    }
</style>
<script src='https://unpkg.com/preact?umd'></script>
<script src='/js/use-rainbow/examples.umd.js'></script>

<script type=module>
    Examples.mountExample(Examples.ExampleRGBHSL, '.example-rgb-hsl')
    Examples.mountExample(Examples.ExampleScroll, '.example-scroll')
    Examples.mountExample(Examples.ExampleHueShiftRGB, '.example-hue-shift-rgb')
    Examples.mountExample(Examples.ExampleHueShiftHSL, '.example-hue-shift-hsl')
</script>
