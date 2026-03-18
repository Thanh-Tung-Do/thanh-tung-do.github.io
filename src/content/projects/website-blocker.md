---
title: "Website Blocker Chrome Extension"
category: "side-projects"
description: "A free, privacy-first Chrome extension for blocking distracting websites. No account, no subscription, no data collection — just configurable blocking with Pomodoro timer, day/time schedules, named block lists, and hard-lock protection. Built because every decent option on the Chrome Web Store either costs money or phones home."
tags: ["JavaScript", "Chrome Extension", "Chrome APIs", "Productivity", "Web Crypto API"]
thumbnail: "/images/projects/website-blocker-chrome-extension-banner.png"
github: "https://github.com/Thanh-Tung-Do/Website-Blocker"
featured: true
order: 7
---

## Why I Built This

Every Chrome extension that could reliably block distracting websites had the same problem: it either required an account, charged a subscription, or collected usage data. The free options were too basic to stick to — no scheduling, no password protection, easy to disable the moment willpower ran low.

I wanted something that worked offline, stored everything locally, cost nothing, and could not be trivially bypassed when the urge to procrastinate hit. So I built it.

## What It Does

**Always Block** — a simple toggle. Flip it on and the listed sites are unreachable until you flip it off.

**Pomodoro timer** — blocks sites during work phases and automatically unblocks during breaks. Configurable work and break intervals with a live countdown in the popup.

**Schedule blocking** — define blocking windows by day of the week and time range. Block Twitter and Reddit from 9am to 6pm on weekdays, leave weekends unrestricted. Multiple named schedules supported so you can switch between "Deep Work", "Study", and "Default" contexts in one click.

**Hard Mode** — time-locked blocking that cannot be cancelled, even with the master password. Set a duration (hours and minutes) and the extension enforces it until the timer expires. Persists across browser restarts. For when you genuinely do not trust yourself.

**Peek (temporary access)** — need to check something quickly on a blocked site? Peek grants 5, 10, or 15 minutes of access with password confirmation, then automatically re-blocks. Disabled during Hard Mode.

**Named block lists** — create separate lists (Social Media, News, Shopping) and assign different lists to different modes. A Private list stays hidden by default and is always active regardless of mode — for sites you want blocked but do not want visible in the main UI.

**Add sites via right-click** — right-click any page and select "Block this website" to add it to a list without opening the popup.

<div class="result-grid">
  <div class="result-card">
    <span class="result-number">4</span>
    <span class="result-label">Blocking modes (Always, Schedule, Pomodoro, Hard)</span>
  </div>
  <div class="result-card">
    <span class="result-number">0</span>
    <span class="result-label">Bytes of data sent to any server</span>
  </div>
  <div class="result-card">
    <span class="result-number">Free</span>
    <span class="result-label">No account, no subscription, no tracking</span>
  </div>
</div>

## Technical Implementation

Built on Chrome's **Manifest V3** extension platform using vanilla JavaScript — no frameworks, no build step, no dependencies.

**Blocking engine** uses `declarativeNetRequest`, the MV3 replacement for `webRequest`. Matching rules are generated from the active block list and registered dynamically. Blocked requests are redirected to a local page with a motivational quote.

**Scheduling and Pomodoro timers** run via `chrome.alarms`, which fires reliably even when the service worker is inactive — solving the core MV3 problem where service workers can be terminated by Chrome at any time. Timer state is persisted to `chrome.storage` so the correct phase is restored on worker startup.

**Security** uses the Web Crypto API throughout: the master password is hashed with PBKDF2 (200,000 iterations, SHA-256) and the block list is encrypted with AES-GCM. Five failed password attempts trigger a 10-minute lockout. One password entry unlocks the session until the browser is closed.

**Storage** uses `chrome.storage.local` only. Nothing leaves the browser.

## Installation

The extension is not yet on the Chrome Web Store. To install it:

1. Download or clone the repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable **Developer mode** (top right toggle)
4. Click **Load unpacked** and select the project folder

Chrome Web Store publication is planned for a future release.
