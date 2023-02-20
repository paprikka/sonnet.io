---
title: 'Short: WiP'
date: 2023-02-20
heroURL: ./src/site/posts/wip/imgs/hero.png
thumbnail: /images/hero/wip-social.png
hidden: false
---

>“Are you pondering what I’m pondering?” <br>
> “I think so Brain, but I still don’t understand why commit messages would matter?”
> <cite> Unaired episode of Pinky and the Brain</cite>

For reasons beyond the scope of this post, I spent a possibly unhealthy amount of time watching _Pinky and the Brain_ as a kid. It wasn’t too bad. ORF, the main Austrian broadcaster also aired the German version of Teletubbies shortly before, which I consider my first psychedelic, although unpleasantly so, experience. Wait, where was I… Ah, yes, here are some quick, practical tips on how we can apply two different modes of thinking when iterating and committing our code, sponsored by ACME.


{% pic "./imgs/herzog.png", "Poorly drawn characters from the Ponky and Bron-a cheap knock off of a famous cartoon from the mid 90s. Both assumed very dramatic poses, with a 1000 mile stare. Ponky says 'I have glimpsed into the abyss' to which Bron, who looks a weirdly similar to Werner Herzog, replies with 'And thus, Ponk, you saw a deep ocean of chaos and darkness'." %}

_Commit often when you’re exploring the problem (divergent thinking) but use structure when you know where you’re heading (convergent thinking). When you diverge you want to prioritise **quantity over quality**, make mistakes cheap, and fun._

Pinky is our divergent process, Brain is the convergence. Let's see how we can apply this to our work.

##  Brain

Consider using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and a commit message linter. In tandem, these tools force you to adhere to a relatively strict format of commit messages, including: 

* the type of the change (*“feat”*, *“fix”*, *“chore”*, *“wip”*) and,
* a terse description of the change itself.

So, no more cryptic messages like _“cosmetics”_, _“typo”_, _“cleaned”_ in your history<a href='#footnote-1' class='footnote'>1</a>, but _“feat(sign-up): add the CTA”_, _“fix: remove typos in the header”_, _“chore: update leftpad”_. Your colleagues and [the future You](/posts/emotive-conjugation#a-ghost-story) will thank you. Small improvements like this go a long way.

These tools reduce the number of things you’ll need to care about when saving your work, play nicely with [semantic release](https://github.com/semantic-release/semantic-release), and provide some uniform structure in shared codebases.

But, what I like about them the most is that if you can’t come up with a good commit message, it’s probably a signal that the changes are either too broad or not focused enough.

This is why I follow the Conventional Commits _style_ for all of my projects, even the ones small enough where installing the tooling would be an overkill.

### Key takeaway:

Impose limitations and repetition to keep focus. Make your code rhyme.

## Pinky

At the same time, when the chunk of work is really tiny and doesn’t merit a description or I’m just exploring different solutions, I commit and push my changes every few minutes.

The process often looks like this:

1. draft some changes, add a bunch of smaller _wip_ commits
2. deploy to a test env or re-run a local build, rinse and repeat…
3. once the code looks good, and the tests pass, squash all _wip_ commits and push to production

> Disclaimer:  For more complex, serious work, I replace step #3 with removing all code and writing it from scratch using TDD. Check GeePaw Hill’s [Intro to Spikes](https://www.geepawhill.org/2020/06/02/an-intro-to-spikes/) for details.


### Key takeaways:

* prioritise short feedback loops
* quantity > quality

With that in mind, I don’t want to spend half of that time crafting my perfect commit message, so I made myself this little snippet:


```bash
    wip () {
        git commit --no-verify -m "wip: $*"
    }
```


Here’s how I use it:


```bash
    $ ga . # stage working changes
    $ wip yak shaving # commit as wip: yak shaving
```


How to install it:

Either paste it in your `.zshrc` or add it to your `PATH` environment variable. Feel free to copy it from [my custom dotfile ](https://github.com/paprikka/dotfile-paella).

## Summary

Understand the two different modes of thinking when exploring and narrowing down the solution. Either automate or use repetition to the point where you can just run things on autopilot. Keep the feedback loops short and make mistakes fun. Brain works, but Pinky plays.

PS. [Alexandra Ciufudean](https://uk.linkedin.com/in/alexandra-ciufudean-36b65514a) edited and translated this article into human. She also came up with the idea of using ~~my childhood trauma~~ one of my favourite cartoons as a metaphor.

### Footnotes

1. <span id='footnote-1'></span> These are real examples found after spending less than a minute sampling the commit history of a randomly selected project.