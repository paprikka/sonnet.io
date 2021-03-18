---
title: "Pair Programming with Snakes"
date: 2021-03-16
hidden: true
heroURL: /images/snakes/intro.png
thumbnail: /images/snakes/intro.png
---

*OK, this was supposed to be a longer post, but I'm trying to learn to get out things like this more quickly, instead of yak shaving and eventually letting them fester in <span title="or a $ git stash">drafts</span>. So, here we go.*

Pair Development is one of those habits that many of us practice in one form or another before realising that:

1. people already have come up with a label for it (*it's a thing*)
2. a significant amount of brain power has been spent in turning it into a form of deliberate practice (*it's a Thing*)

This post lies somewhere between those two points. It is not an introduction to Pair Development, but a short description of a few dynamics that are often skipped during training, the things that we discover once we start practicing it ourselves. For tried and tested theoretical resources, check the footer. 

But, if you came here for *practical* and *opinionated* pairing advice as well as snakes wearing fancy hats, you came to the right place, my friend.


### An Ideal Pairing day

![](/images/snakes/01.png)

Two snakes work on a thing together. They might be using the same workstation, a [remote editor]() or zoom and [a bit of branch magic](). The technology is secondary here and often the most rudimentary tools work best. Keep in mind that *ideal* in this context means as much as *it doesn't exist*. We will see why in a moment. In the rare occasions a day like this does happen, it might be a sign that you should be taking breaks more frequently.

You might've also heard the term *Ideal Pairing Day* from a development manager, a <span title="mumbles about browser wars">"seasoned"</span> engineer or a project manager. It was used as a measure of time: how much could two snakes achieve when pairing uninterrupted for a single day?

### Less ideal would be ideal

![](/images/snakes/02.png)

You've been pairing for a couple of hours. You have a fairly clear vision of where you're heading, but then stumble upon a problem that needs more research. Or, maybe you realise that need to finish a smaller task that could be easily be done in parallel. Perhaps you're just tired of each other, tired of talking, or both. All of these are valid reasons.

The yellow snake stays working on the story, cracking the red-green-refactor cycle like it's no one's business, but the green one moves temporarily to another task. 


![](/images/snakes/03.png)

You start working on the same task, but eventually realise that splitting up would be the best use of your time. You have a fairly clear idea of the interface between the components you're writing and both pieces of work are not too complex. 

Our snakes are working on a fairly complex build tool. One of the modules is a CLI tool pulling data from AWS and rendering it in the terminal. The yellow snake works on the script fetching the data, the green one uses the corresponding test data to build the UI.
After and hour or so they pair up again, connect the two pieces and continue working on the main problem with little difficulty. Happy sneak times.


### Rotations

![](/images/snakes/04.png)

Generally, snakes shouldn't be pairing for longer than a day. So, just after the standup one snake is replaced by another. This cycle repeats on the following day, creating a pattern like this:

![](/images/snakes/rotations.png)

Why do we do this? Frequent rotations help with knowledge sharing within the team and allow everyone to have a stronger sense of ownership. No one wants to be "the postgres snake" for reasons that are *purely circumstantial*, such as just happening to be the original developer on a particular story. Same applies to the "exotic (database technology) snake" whom you have to call in the middle of the night because no one has enough context to revert a broken release. 

Whether you're a reptile or a mammal, rotating can be a chance for you stay engaged or rest. You should avoid working on the same task for a week straight.

The downsides are pretty obvious but often avoidable: frequent rotations can make it hard to keep enough context to feel that you're productive once you pick up the task again. It can be demoralising not not be able to immerse yourself in a problem fully.

How to mitigate?

Some problems just require more focused time, be it due to their complexity or the amount of unknowns lying ahead. But this could also be a sign that the task should be split into smaller ones. If you're sure that's not possible, consider having longer rotations or parallelising parts of the task. Avoid being dogmatic. Test and pick what works best for you.

### An impromptu mob

![](/images/snakes/05.png)

Yellow and Green had some difficulties with setting up the environment when starting, so they got some help from a Cyan snake, one well versed in the pythonic scriptures. They might not understand everything but now they know at least the required incantations. Cyan can move on to her previous task.

Key points here: Cyan had the time to help. Cyan gave them just enough context to continue working on the story. Maybe tomorrow Cyan will jump in an pair with one of them and learn more about their domain.

### Multiple pairs joining

![](/images/snakes/06.png)

Here's what *could've* happened: 

1. Yellow and Green discover that their changes might impact a larger piece of work, or maybe they want to consult their approach with the rest of the team. 
2. Yellow and Green want to share with the rest of the team how to iterate on the large feature they're just wrapping up. There's not better way of learning than by practice, so all snakes work briefly together. Maybe they're showing how their new deployment pipeline is used, or how it's extended.

There's a third pair of snakes which we can't see here. Those snakes decided to avoid interruptions and work in a more focused way. If you feel like distractions are a big problem when pairing, consider having designated "interruptible" and "uninterruptible" pairs in your team.

<!-- And, we need to be mindful of others' focus. -->
<!-- Happy teams have a high level of trust and allow people to work independently, so this could be also an antipattern. 
Efficient teams have high level of trust, so this isn't something that sohuld be abused. -->


### A regular day
![](/images/snakes/07.png)


Yellow mobbed with an entire rainbow of snakes and moved on to working solo for a while. In fact, most of them spend half of the day on workin solo. They joined back again in the afternoon. It seemed chaotic from a distance.

In Ideal Pairing Day can often look just like this because we're chaotic by nature. 

Because, an ideal pairing day is one when you balance working with someone and solo, take frequent breaks, learn which problems lend themselves better to working solo. An ideal pairing day is when you feel like you've learned something from your buddy. 



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

Bu to me the best thing about pairing is the short feedback loop. We split our thinking into two modes: *what?* and *how?* and we assign those modes to two different people. 
Flow, *being in the zone* are all great things (believe me, I keep trying to make apps for that), but communicating efficiently and being able to plan mental pingpong with another human being are not only genuinely fun thing sto do, but one of the most powerful things humans can do.

---
Credits:

*many of the structures described here come from the work of Gel Goldsby, my old colleague from Unruly. Thank you, Gel.*

