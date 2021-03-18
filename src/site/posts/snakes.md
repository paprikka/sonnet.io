---
title: "Pair Programming with Snakes"
date: 2021-03-16
hidden: true
heroURL: /images/snakes/intro.png
thumbnail: /images/snakes/intro.png
---

OK, this was supposed to be a longer post, but I'm trying to learn with getting things like this out more quickly, instead of yak shaving and eventually letting them fester in <span title="or a $ git stash">drafts</span>.

Pair Development is one of those habits that many of us practice in one form or another before realising that:

1. people not only came up with a label for it, but
2. also spent so much effort and brain power of turning it into a form of deliberate practice.

This is not an introduction to Pair Development, but a short description of a few dynamics that are often skipped when people are teaching it, the things that we discover once we start practicing it. If you want to learn more, check out the resources in the footer.

If you came here for opinionated practical pairing advice and snakes wearing fancy hats, you came to the right place.

<!-- Many would disagree with me here, saying I'm not only being naive but also unfair toward the sheer amount of research an brain power put into the practice. And although that is correct, Pair Development is exactly that: two or more people working to -->

![](/images/snakes/01.png)

### Ideal Pairing day

Two snakes work on a thing together. They might be using the same workstation, a remote editor or zoom an a bit of branch magic. Ideal means that it almost never exists, and in the rare occasions it does happen, it could be a sign that you should be taking breaks more often.

There's another meaning here: You might've heard this one from a development manager, a <em title="mumbles about browser wars">seasoned</em> engineer or a project manager. It's a measure of time: how much can two snakes develop in one day, when working uninterrupted, on the same workstation for a single day?

### Less ideal, but somehow more ideal

![](/images/snakes/02.png)

You've been pairing for a couple of hours. You have a fairly clear vision where you're going, but then stumble upon a piece that needs researching, or maybe a smaller taks, like a shell utility supporting your script. Perhaps you're just tired of each other, or talking, or both. It's OK.

The yellow snake stays working on the story, cracking the red-green-refactor cycle like it's no one's business, but the green one moves temporarily to another task. 


![](/images/snakes/03.png)

You start working on the same task, but eventually realise that splitting up would be the best use of your time. You have a fairly clear idea of the interface between the things you're writing and both pieces of work are not too complex. 

These snakes are working on a fairly complex build tool. One of the modules is a CLI tool pulling data from AWS and rendering it in the terminal. The yellow snake works on the script fetching the data, the green one uses some test data to build the UI.
After and hour or to they pair up again and continue working on the main problem. Happy sneak times.


### Rotations

![](/images/snakes/04.png)

Generally, snakes shouldn't be pairing for longer than a day. So, just after the standup one snake is replaced by another. This cycle repeats on the following day, creating a pattern like this:

    ~ ~ ~ ~ ~ ~ ~ ~
     ~ ~ ~ ~ ~ ~ ~ ~


Frequent rotations help with knowledge sharing within the team and allow everyone to have a stronger sense of ownership. No one wants to be "the postgres snake" or the "exotic (database technology) snake" whom you have to call in the middle of the night because no one has enough context to revert a broken release. 

Whether you're a reptile or a mammal, rotating can be a chance for you stay engaged or rest. You should avoid working for a week straight.

Frequent rotations might make it harder to give them enough focused attention, so keep context in mind. Any methodology followed blindly is // insert a pun here?


### An impromptu mob

![](/images/snakes/05.png)

Yellow and Green had some difficulties with setting up the environment when starting, so they got some help from a Cyan snake, well versed in the pythonic scriptures. They might not understand everything but now they know at least the required incantations. Cyan can move on to her previous task.

Key points here: Cyan had the time to help. Cyan gave them just enough context to continue working on the story. Maybe tomorrow Cyan will jump in an pair with one of them.

### Multiple pairs joining

![](/images/snakes/06.png)

Here's what could've happened: 

1. Yellow and Green discover that their changes might impact a larger piece of work, or maybe they want to consult their approach with the rest of the team. 
2. Yellow and Green want to share the knowledge of their new feature with the rest of the team. Maybe they're showing how the new deployment pipeline is used, or how it's extended.

Efficient teams have high level of trust, so this isn't something that sohuld be abused. And, we need to be mindful of others' focus.


### A day
![](/images/snakes/07.png)


Yellow mobbed with an entire rainbow of snakes and moved on to working solo for a while. In fact, most of them spend half of the day on workin solo. They joined back again in the afternoon. It seemed chaotic from the distance.

An ideal pairing day is one when you balance working with someone and solo, know yourself, your fellow snakes well enough to take frequent breaks and pick the right approach to solving problems, without being dogmatic. 

Here's what's more important:

The beautuy of pairing is the short feedback loop. You split your thinking into two different modes: thinking about what and how. Flow, being in the zone are all great things (believe me, I keep trying to make apps for that), but communicating efficiently and being able to plan mental pingpong with another human being are not only genuinely fun thing sto do, but one of the most powerful things humans can do.

<style>
.rotate {
    animation: spin-those-snakes 3s 1s linear infinite both;
}
@keyframes spin-those-snakes {
    from{ transform: scale(.6) rotate(0); }
    to { transform: scale(.6) rotate(360deg); }
}
</style>
<img src='/images/snakes/circle.png' alt='snakes' class='rotate'/>

The drawings in the post are mine, but the credit for ideas many of them should go to my old colleague, Gel Goldsby. You can find more about her [here]() and in the resources at the bottom of this post, where I'll link to resources which tackle the topic with more depth.

You might have heard about pair programming from a colleague or even tried it yourself.

What is Pair Programming?
[emoji gif]
