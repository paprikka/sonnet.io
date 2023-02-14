---
title: 'Short: WiP'
date: 2023-02-13
hidden: true
---

TODO: a hero image with the picture of Ponky and Brone (safe from the perspective of IP)

> "Are you pondering what I'm pondering?"<br>
  "I think so Brain, but [...]"
> <cite>The Book of Narf 32:17</cite>

{# I think so Brain, but I still don't understand why commit messages would matter? #}

For reasons beyond the scope of this post, I had spend a significant amount of time watching Pinkie and the Brain in German. It wasn't too bad, ORF also aired the German version of Teletubbies shortly before, which I consider my first psychedelic, although unpleasantly so, experience. Wait, where was I... Ah, yes, here's a quick tip on committing your code, sponsored by Pinkie and the Brain™.

> Commit often when you're exploring the problem (diverging) but use structure when you know where you're heading (converging). When you diverge you want to prioritise quantity over quality. Here's how I apply this to committing my work.

In other words Pinky is our divergent process, Brain is the convergence.

### Brain

Consider using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). They reduce the number of things you'll need to care about when saving your work, play nicely with semantic release, and provide some uniform structure in a shared codebases. Plus, if you can't come up with a good commit message, it might be a hint that the changes are too broad or not focused enough. 


### Pinky

At the same time, I commit and push my changes every few minutes, when the chunk of work is really tiny and doesn't merit a description. The process looks like this:

1. spike some changes, add a bunch of smaller wip commits
2. deploy to a test env
3. once the code looks good, and the tests pass, squash all wip commits and push to production

In a way, it's similar to TDD, as it prioritises short feedback loops.

I don't want to spend half of that time crafting a perfect commit messages, so I made myself this little snippet:

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

Either paste it in your `.zshrc` or add it to your path variable. You can check out mine [here](https://paella.dotfile).

### Summary

Whatever approach you follow, try make sure that you don't need to think about the things that are not relevant to your work. Either automate or use repetition to the point where you can just run things on the autopilot.

PS. Thanks to Luna for suggesting PB