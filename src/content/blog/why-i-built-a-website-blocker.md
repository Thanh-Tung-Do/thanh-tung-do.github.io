---
title: "Why I Built a Website Blocker Chrome Extension (And Let AI Do the Heavy Lifting)"
date: 2026-03-25
excerpt: "On the attention economy, the problems with existing blockers, and what it felt like to ship a working Chrome extension in an afternoon without writing a line of JavaScript."
tags: ["Chrome Extension", "Productivity", "Vibe Coding", "AI Tools", "Focus"]
category: project-writeup
thumbnail: "/images/blog/anthropic-claude-code.webp"
draft: false
---

![Claude Code by Anthropic](/images/blog/anthropic-claude-code.webp)

As a data science tutor, I spend a lot of time watching people learn. Or, more accurately, watching people *try* to learn while their attention is somewhere else entirely. Phones face-down on the desk but still glowing. Laptop screens angled just enough to hide what is actually open. More often than not, it is social media. Sometimes YouTube. Rarely the lecture slides.

It got me thinking about my own habits. Because honestly, I am not immune to it either.

## The Attention Economy Problem

We are living in an era where your attention is genuinely one of the most valuable things you have, and some of the smartest engineers in the world have built systems specifically designed to capture it. The algorithm is not static. It learns from every scroll, every pause, every interaction, and it gets better at keeping you hooked the more you use it.

I have felt this firsthand: the mild discomfort when I close YouTube before a video ends, the reflex to open Instagram without even deciding to. That is not a willpower problem. That is a system working exactly as intended.

So I wanted to build something to push back.

## The Market Problem Nobody Talks About

Before building my own, I did what most people do: I went looking for an existing solution. What I found was frustrating.

Free blockers tend to be watered-down, locking the features you actually need behind a paywall. And the paid options? A lot of them are businesses built on monetising your browsing behaviour. You pay with money, or you pay with data. Either way, a tool that is supposed to protect your focus ends up being another service with an interest in tracking what you do online.

That sits badly with me. My extension collects nothing: no browsing history, no usage analytics, no data leaving your machine. It does one job and minds its own business.

## The Build: Vibe Coding with Claude Code

Here is the part where I have to be honest: I do not write JavaScript. I am not a frontend developer. Before this project, building a Chrome extension from scratch would have felt completely out of reach.

But I wanted to test just how far AI-assisted development had come, so I opened Claude Code and started describing what I wanted:

- A website blocker with a simple block list
- A Pomodoro timer built in
- Scheduling so blocks could activate automatically
- Password protection to stop myself from just disabling it on a whim
- Context menu blocking so I could not right-click my way around it

A few hours later, it worked.

The experience was genuinely impressive. Yes, the initial design had that familiar "AI built this" look, the purple gradients and rounded cards that seem to be everywhere right now. But the core functionality was solid, and I was able to iterate on it quickly by just describing what I wanted to change.

You still need critical thinking. You still need to understand what you are asking for and whether the output makes sense. But the barrier to actually building something has dropped dramatically. If you have a software engineering background, vibe coding will feel even more natural. But even without one, I went from idea to working Chrome extension in an afternoon.

That felt like something worth sharing.

## Try It Yourself

The extension is live on [my portfolio](/projects/website-blocker) and the full source code is on [GitHub](https://github.com/Thanh-Tung-Do/Website-Blocker). If you are someone who loses hours to social media or finds yourself reaching for your phone mid-focus session, it might be worth a look.

Your attention is worth protecting. Build the tools to do it.
