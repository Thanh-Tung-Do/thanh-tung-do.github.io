---
title: "Website Blocker Chrome Extension"
category: "side-projects"
description: "A Chrome extension with Pomodoro timer, time-based scheduling, master password protection, multiple schedule support, and export/import functionality. Built to enforce focused work sessions without relying on third-party services."
tags: ["JavaScript", "Chrome APIs", "Productivity", "Chrome Extension"]
featured: true
order: 7
---

## Background

Built out of personal frustration with existing blockers that were either too simple (no scheduling) or too complex (required accounts and subscriptions). The goal was a self-contained Chrome extension that could be configured once and trusted to enforce work sessions reliably.

## Features

**Pomodoro timer**

Configurable work and break intervals with visual countdown in the popup. The timer automatically pauses blocking during break periods, then re-enables it when work time resumes.

**Time-based scheduling**

Define blocking windows by day and time rather than relying on manual activation. For example: block YouTube and Reddit from 9am to 6pm on weekdays, but allow unrestricted access on weekends.

**Master password protection**

A master password prevents easy bypass. Without the password, the extension cannot be disabled or the blocked site list modified. This is primarily useful for preventing impulsive overrides during focused work sessions.

**Multiple named schedules**

Create separate schedules for different contexts, "Deep Work", "Study", "Default", and toggle between them with one click. Each schedule maintains its own site list and time windows.

**Export and import**

Configuration exports as a JSON file for backup or sharing across devices. Import restores all schedules and settings.

## Technical Approach

Built using Chrome's Manifest V3 extension APIs. Key implementation details:

**Blocking logic:** Runs in a service worker (background script) using `chrome.webRequest` to intercept navigation requests. Each intercepted request is checked against the active schedule's site list and the current time. Matching requests are redirected to a local blocked page.

**Storage:** All configuration stored in `chrome.storage.sync`, which persists across devices when signed into Chrome and survives extension updates.

**Popup UI:** Vanilla JavaScript with no dependencies. Kept intentionally lightweight to minimise the extension's resource footprint.

**Security:** The master password is stored as a hash (SHA-256 via the Web Crypto API) rather than plaintext. The hashed value is compared on verification.

## Lessons

Manifest V3's service worker model introduces a complication for timer-based features: service workers can be terminated by Chrome at any time. The timer state is persisted to `chrome.storage` on every tick and restored on worker startup, which handles the termination case but adds some complexity to the timer implementation.

The extension is available on GitHub. Chrome Web Store publication is planned.
