---
title: 'Short: WiP'
date: 2023-02-13
hidden: true
---

> "Are you pondering what I'm pondering?"<br>
> "I think so Brain, but I still don't understand why commit messages would matter?"
> <cite>Unaired episode of Pinky and the Brain</cite>

For reasons beyond the scope of this post, I spent a possibly unhealthy amount of time watching Pinky and the Brain as a kid. It wasn't too bad. ORF, the main Austrian broadcaster also aired the German version of Teletubbies shortly before, which I consider my first psychedelic, although unpleasantly so, experience. Wait, where was I... Ah, yes, here's a quick, practical tip on how we can apply two different modes of thinking when iterating and committing our code, sponsored by Pinky and the Brain™.

// a hero image with the picture of Ponky and Brone (safe from the perspective of IP)
// Or should I say "Pinky and the Brone" our two IP friendly Jirds

> Commit often when you're exploring the problem (divergent thinking) but use structure when you know where you're heading (convergent thinking). When you diverge you want to prioritise **quantity over quality**, make mistakes cheap, and fun.

Pinky is our divergent process, Brain is the convergence. Here's how I apply this to my work.

### Brain

Consider using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and a commit message linter. In tandem these tools force you to adhere to a relatively strict format of commit messages, including *the type of the change* (e.g. *feat: add the sign up button*, *fix: remove typos in ...* *chore: ...*, *wip: ...*) and a *terse description of the change itself*. So, no more cryptic commit messages like "cosmetics", "typo", "cleaned" in your history. Your colleagues and the [future You](/posts/emotive-conjugation/) will thank you. Small improvements like this go a long way.

These tools reduce the number of things you'll need to care about when saving your work, play nicely with [semantic release](https://github.com/semantic-release/semantic-release), and provide some uniform structure in shared codebases.

What I like about them the most is that if you can't come up with a good commit message, it's probably a signal that the changes are too broad or not focused enough.

This is why I follow Conventional Commits for all of my projects, even the ones small enough not to need commit message linters, CIs...

Key takeaway: impose limitations to keep focus. Make your code rhyme.

### Pinky

At the same time, when the chunk of work is really tiny and doesn't merit a description or I'm exploring different solutions, I commit and push my changes every few minutes.

The process often looks like this:

1. spike some changes, add a bunch of smaller *wip* commits
2. deploy to a test env or re-run a local build, rinse and repeat...
3. once the code looks good, and the tests pass, squash all *wip* commits and push to production

> For more complex, serious work, I replace step #3 with removing all code and writing it from scratch using TDD. Check GeePaw Hill's [Intro to Spikes](https://www.geepawhill.org/2020/06/02/an-intro-to-spikes/) for details.

Key takeaways: 

- prioritise short feedback loops
- quantity > quality
- make mistakes cheap and fun

With that in mind, I don't want to spend half of that time crafting a perfect commit messages, so I made myself this little snippet:

```bash
wip () {
	git commit --no-verify -m "wip: $*"
}
```

Here's how I use it:

```bash
$ ga . # stage working changes
$ wip yak shaving # commit as wip: yak shaving
```

How to install it:

Either paste it in your `.zshrc` or add it to your path variable. You can check out mine [here](https://github.com/paprikka/dotfile-paella).

### Summary

Whatever approach you follow as a maker/engineer/geek, try not to get bogged down with things not relevant to the task at hand. Undersand two different modes of thinking when exploring and narrowing down the solution. Either automate or use repetition to the point where you can just run things on the autopilot.

PS. Alexandra Ciufudean edited and translated this article into human. She also came up with the idea of using ~my childhood trauma~ one of my favourite cartoons as a metaphor.