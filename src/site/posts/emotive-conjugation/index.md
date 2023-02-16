---
title: 'Emotive Conjugation'
date: 2022-05-23
hidden: false
heroURL: ./src/site/images/emotive-conjugation/hero.png
thumbnail: /images/emotive-conjugation/social.jpg
description: 'Exploring attribution bias, GPT-3, and ancient pickling techniques'
---

<style>
    .post {
        --pickle: #959e00;
    }
    .emotive-gpt-3 {
        padding: 0;
        margin: 0;
    }
    @media all and (min-width: 430px) {
        .emotive-gpt-3 { padding-left: 3rem; }
    }
    .emotive-gpt-3 p{
        font-style: italic;
        font-size: 1.75rem;
    }
    .emotive-gpt-3-legend {
        font-style: italic;
    }
    .emotive-gpt-3 em,
    .emotive-gpt-3-legend em {
        font-weight: 600;
        color: var(--pickle);
    }
    :is(.emotive-gpt-3 em, .emotive-gpt-3-legend em):before {
        /* content: '🥒 '; */
    }
    .emotive-rant{
        transition: 1s all;
        opacity: 1;
    }
    .emotive-rant--hidden{
        display: none;
        opacity: 0;
        visibility: hidden;
    }
    .emotive-rant__cta{
        appearance: none;
        background: none;
        border: none;
        color: var(--color-text);
        font-weight: 600;
        cursor: pointer;
    font-style: italic;
    text-decoration: underline;
    }
    .emotive-rant__cta:hover,
    .emotive-rant__cta:active { color: var(--color-link); }
    @media all and (min-width: 700px) {
        .post__content .post__quote--pickled {
            position: relative;
            margin-left: 0;
            padding-left: 11rem;
        }
        .post__content .post__quote--pickled:after{
            content: '';
            background-position: 0 bottom;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url('/images/emotive-conjugation/quote-bg.png');
            bottom: 0;
            height: 100%;
            left: 0;
            position: absolute;
            width: 10rem;
            z-index: -1;
        }
    }
</style>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const el = document.querySelector('.emotive-rant__cta')
       el.onclick=()=>{
           el.remove()
           document.querySelector('.emotive-rant').classList.remove('emotive-rant--hidden')
       } 
    })
</script>

> I am firm, you are obstinate, he is a pig-headed fool.

Also, good morning/afternoon (wherever, whenever you are)!

Here’s something you’ve never heard before: we’re more charitable when explaining our own behaviour vs. behaviour of the others. Emotive conjugation illustrates that by mimicking the grammatical conjugation of irregular verbs. Here’s an example:

{%
    picture
    '/images/emotive-conjugation/reasons-pickles-were-forgotten.png',
    'A comic strip describing the reasons why the main character forgot to buy pickles for dinner. "I was busy" says the main character. "You were distracted". "He is just an idiot"'
%}

The term was mentioned for the first time in the 1940s by Bertrand Russel, during a BBC radio show called The Brains Trust.

As you can already see, emotive conjugation is a tool that allows us to express attribution bias using quasi-grammatical rules. Nifty! Put that in your [mental model catalogue](https://fs.blog/mental-models/), Farnam Street.

## GPT-3

A true 0.1x engineer is a lazy one. So, let’s shove some instructions into GPT-3 to see what happens. We’ll start with some prompts and tweak the settings a little bit:

### First attempt

<p class='emotive-gpt-3-legend small'>
Note: Prompts are in cursive, <em>and the completed text is in bold</em>.
</p>

<section class='emotive-gpt-3'>
<p>
I am firm, you are obstinate, he is a pig-headed fool. <br/>
I am righteously indignant, you are annoyed, he is making a fuss over nothing.<br/>
I have reconsidered the matter, you have changed your mind, he has gone back on his word.
</p>
<p>
I was tired, <em>you were lazy, he was a slacker</em><br/>
<em>I was busy, you were unoccupied, he was idle.<br/>
I was motivated, you were uninspired, he was apathetic.</em><br/>
I forgot, <em>you neglected, he ignored</em>
</p>

</section>

### Examples improved

We’ve increased the temperature a bit and added a small frequency penalty to get slightly diverse input.

<section class='emotive-gpt-3'>
<p>
My idea was groundbreaking, <em>his was unoriginal, and yours was just stupid.</em><br/>
I’m an excellent driver, <em>you’re a terrible driver, he’s the worst driver in the world.</em><br/>
I was excited, <em>you raised your voice, he was shouting.</em><br/>
<em>I am curious, you are interested, he is nosy.<br/>
I am trying to be reasonable, you are being stubborn, he is being obstinate.</em>
</p>
 
<p>
I'm a 10x developer, <em>you're a 5x developer, he's a 2x developer.</em>
(fair enough)
</p>

<p>
I'm always right, <em>you're always wrong, he's always wrong.</em><br/>
<em>I'm the best developer in the world, you're the second best developer in the world, he's the worst developer in the world.</em><br/>
</p>

<p>
    My implementation is perfect, <em>yours is inadequate, his is completely wrong.</em><br/>
<em>I was thinking about the problem, you were daydreaming, he was asleep on the job.</em><br/>
<em>I am not going to stoop to his level, you will stoop to mine, he will <strong>wallow in the gutter</strong>.</em> (sic!)<br/>
</p>
 
<p>
    My idea was groundbreaking, <em>his was unoriginal, and yours was just stupid.</em>
</p>
</section>

Side note: it’s amusing that mentioning a 10x dev resulted in the following prompts being quite toxic. Who would’ve thought?

{%
    figure
    '/images/emotive-conjugation/10x-engineer.png',
    'Greek philosopher, with a pickle for his head, holding a pickle-themed artefact in his hand'
%}
A true 10x developer
{% endfigure %}

Brilliant! We’ve successfully automated <s>that one guy in your office</s> emotive conjugation. I must admit, I’m much less pessimistic about using GPT-3 as a copy generation tool. Here’s the [preset](https://beta.openai.com/playground/p/8u7mkUfwLarNeBgsjiHMQhUM?model=text-davinci-002), in case you wanna give it a go.

Please remember, this is a powerful tool, and we should use it <span class="emotive-ir">ir</span>responsibly. And, to use it <span class="emotive-ir">ir</span>responsibly, we need to learn how it works.

## Attribution bias

{%
    picture
    '/images/emotive-conjugation/attribution-bias.png',
    'Two identically looking men. The first one is pointing at himself saying "This is me all right (two words)". He uses his other hand to point at the other man and say "This is him, alright" (one word).'
%}

Chances are you’ve heard about attribution bias before. The general idea is that we constantly make _attributions_: judgments and assumptions about why people act in a certain way. We tend to be much more compassionate when judging our own decisions than the choices or actions of others.

Some familiar examples of attribution bias might involve a driver cutting you off abruptly (_He’s reckless! Why doesn’t he drive the way I do?!_), or… a fellow engineer, hidden behind the lines of git diffs in your code editor, with their pythonic incantations invoking the wrong<button class='emotive-rant__cta umami--click--emotive-conjugation-rant'>[...] click to expand rant.</button><span class='emotive-rant emotive-rant--hidden'>, forbidden abstractions, throwing at you nothing else but the cursed spaghetti, which now you, the 10x engineer in a shiny full plate armour, need to fix. Why didn’t they think of using Typescript? How come they didn’t read that carefully crafted tweet you wrote about co-locating code? And, what’s the point of passive-aggressive messages on Slack if no one pays attention? Didn’t they hear that the old Object-oriented gods are dead, their temples and towers toppled by the blinding light of lambda calculus? Our Church was built and named after [its founder](https://en.wikipedia.org/wiki/Alonzo_Church). Hey, are you still listening?</span>

Humans are social creatures, and I like to think that we’re not inherently as selfish as the media soup would like us to think. Most of us don’t think less of others, but we have a tendency to take cognitive shortcuts.

For example, instead of malevolence, attribution bias could be [partially](https://en.wikipedia.org/wiki/Attribution_bias#Limitations_of_the_theory) explained by a lack of data: we don’t know that the driver who cut you off was tired or stressed, or that the engineer whose commits you were about to criticise was in fact _you_.
<p id='a-ghost-story'></p>

{%
    picture
    '/images/emotive-conjugation/comic-strip.png',
    "A comic strip describing two worms or snake complaining about each other’s work, while being in fact a single, two-headed snake"
%}

## Ghost in the /bin/sh

Now, if you’re a software engineer or anyone collaborating with people on solving a problem where the solution changes as often as your understanding of the problem, where people come and go, and the problem is _wicked_, you’ll quickly learn that:

1. writing code is easy, but
2. reading code is hard, because
3. 9 out of 10 times your work is communication, and
4. most of the time you’re communicating with _ghosts_.

You’re communicating with ghosts, because they’re not _here_ and they’re not _now_. The artefact in front of you lacks the context of the thought process of the person coming up with the solution, with all of its undocumented details and constraints: they were working with a legacy system, they had to rush, they were afraid of looking stupid (so they over-abstracted everything), they were tired. In a sense, this problem is as old as writing itself (assuming that the god Teuth gave us writing):

<figure class='post__quote post__quote--pickled'>
    <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>
            And when they [thoughts, ideas] have been once written down they are tumbled about anywhere among those who may or may not understand them, and know not to whom they should reply, to whom not: and, if they are maltreated or abused, they have no parent to protect them; and they cannot protect or defend themselves.
        </p>
    </blockquote>
    <figcaption>— Jowett, Benjamin. <cite>The Dialogues of Plato in Five Volumes. 3rd ed. Oxford University, 1892. <a href='http://books.google.com/books?id=xjE6AnrGK18C&pg=PA483'>Vol. 1, pp. 483–489.</a></cite>
    </figcaption>
</figure>

In other words, hips don’t lie, and the code you wrote communicates the complexity and the meaning of your work in a very shallow way. And that’s just the nature of the medium. Still, your code will have to <s>defend</s> explain itself regardless.

### Why should we care? Two reasons:

1. Blaming others is a waste of energy.<br/>
   You could’ve avoided that (surprisingly) complex rewrite if you had spent more time thinking about the reasons the code looks this way, instead of assuming they _didn’t know better_.

2. You can get better at this.

People are prone to cognitive bias because without them it would be impossible for our brains to make efficient predictions and to reason about the plethora of sensory stimuli surrounding us. The engine cannot be completely changed but it can be improved with a bit of practice. For instance, research conducted on students shows that [attributional retraining](https://guilfordjournals.com/doi/10.1521/jscp.2010.29.6.668) is tied to better performance. These improvements were especially noticeable when looking at students who used to explain their failures with external factors, and particularly those who used to work in more competitive environments.

Attributional retraining mainly involved encouraging _controllable_ attributions (_I can pass the exam if I study_) and discouraging _uncontrollable_ attributions (_I will fail, since I always do_). Nothing controversial here, since if you want to improve an aspect of your life, starting with yourself is generally a good heuristic. But, I also think that there’s something to say about trust. Human apes have a tendency to fill the gaps in their knowledge with the worst possible outcomes.

After all, the farther apart we are on the Emotive Conjugation Table™, the less we know about each other, and the less likely we are to make kind judgements.

{%
    picture
    '/images/emotive-conjugation/emotive-conjugation-table.png',
    "A comic strip describing two worms or snake complaining about each other’s work, while being in fact a single, two-headed snake"
%}

In my experience, many of the problems regarding trust or blame got solved when I filled the room with people who generally don’t work together. A prime example would be members of distant teams, usually working through a proxy (e.g. an ops person and an engineer) or a bunch of highly specialised, siloed teams. That’s in part because we’re more likely to give the benefit of the doubt to people we know.

So let’s take a look at a few practical tools that might improve this situation. You will notice many of these solutions also aim at improving knowledge sharing and I believe that’s not by accident. It’s easier for us to empathise with what we know.

## Tools

{%
    picture
    '/images/emotive-conjugation/sharing-dill.jpg',
    'Two consenting pickles sharing a bag of dill'
%}

### Smell Your Colleague Day™

Are you running a distributed team? Meet at least once a month/quarter. Put a human face on the JPEG-encoded blob of rectangles you talk to in the morning.

### Pair development

Try pair programming, or pair development. In a nutshell, pair programming involves two engineers working on a problem together. Pair development means two or more people from different functions working on a problem together. Here’s a quick introduction with more resources about [pair development](https://sonnet.io/posts/snakes).

If you can’t commit to doing it regularly, consider running an occasional mob-programming session on a Friday afternoon. Pick a weird chunk of spaghetti and untangle it a little bit with your colleagues. Or, be opportunistic and have an engineer and a marketing person pairing on the next release email.

The biggest benefits of pair development take time to materialise (or to be communicated well), but there’s low-hanging fruit. Earlier we said that reading code is a bit like speaking with ghosts. You don’t have to worry about these issues if the ghost is with you _here_ and _now_ (and ideally, alive).

### Design Thinking

Learn about any cross-functional methodologies, such as Design Thinking or Human Centred Design and try to introduce them in your work. Again, these are iterative processes and I’d love for you to go through a series of sprints relying on it, but even borrowing one or two tools can help, albeit to a lesser extent.

Recommended tools to start with: User Story Mapping or ideation.

Yes, having people from different functions and backgrounds will save you time due to less LARPing on Slack and that’s fantastic. But, it will also let people see beyond their respective parts of the spaghetti bowl you’re sharing (and there’s only one bowl).

This is a huge topic, so I’m leaving out much, but if you’re curious to learn more, [come and say hi](https://sonnet.io/posts/hi)!

### Cross-team rotations

Try to rotate for a week and work with a different team. Rotating between engineering teams (pods) is the easiest first step. What I found even more useful was to jump between different functions. Spend a week working with the Ops team if your business has one.

Advice for managers: if your organisation had to quickly scale up and you’re struggling with knowledge silos or bottlenecks between teams—this is a really cheap way of ameliorating the problem.

### Shadowing

Shadowing means learning from your colleagues by observing their work from up close but without actively participating in it or mimicking what they do. A great chance to try this is your company’s hiring process: a new joiner shadows a more experienced colleague interviewing a candidate. I often shadow product managers or designers conducting user interviews. I am yet to see a case when I’d consider this time wasted.

## Closing words

My archeologist friend once told me that working at a dig site is like visiting an empty theatre after the play has ended. Your job is to figure out the title of the play and the only tools at your disposal are the prompts left on the stage and your own curiosity.

And I think this is a very apt metaphor for our work. Everything’s fragmented: the code you’re working on communicates only a small part of the original problem, the people behind it are gone or on a different continent. The requirements are just a game of telephone.

So, if you can take away one thing from this post, let it be this: next time you’re tasked with fixing someone’s antediluvian code mess, try to observe your first natural reaction. Is ranting going to make you feel better? Then, _na zdrowie_! Rant away! Then cut the author some slack. Chances are it was you.

And if that doesn’t work, fall back to Hanlon’s razor:

> Never attribute to malice that which is adequately explained by stupidity.

See you soon!

---

### Credits

_[Alexandra Ciufudean](https://uk.linkedin.com/in/alexandra-ciufudean-36b65514a) edited this article and translated it into Human._

_The inspiration for this article came from a chat with [Morgan Friedman](https://westegg.com)._

{%
    picture
    '/images/emotive-conjugation/tomato-hugs.jpg',
    'A pickle and a tomato in a warm embrace'
%}
