---
title: Talkify
date: '2026-08-18'
spoiler: Voice dictation for macOS that runs fully on-device, triggered by holding the fn key.
---

<img src="/icons/talkify.png" alt="Talkify|float-left">

Hold **fn**, speak, release, and the text lands in whatever app you are in. Talkify is a menu bar dictation app for macOS 26 on Apple Silicon, built on Apple's `SpeechAnalyzer` and `SpeechTranscriber`, so recognition happens on the device. It makes no network requests, stores no audio, and keeps nothing but the local usage metrics in Insights. The HUD draws in the notch, with six Metal-backed voice visuals, and quick-tapping **fn** starts a hands-free session instead.

Two languages get two keys: **fn** for the first, **right ⌥** for the second, both rebindable. Apple Speech transcribes one language per session and cannot detect which one you speak, so a wrong guess produces fluent nonsense rather than an error, and a key per language avoids that. You can also drag an audio or video file to the top of the screen: the island takes it, transcribes in the background, then hands back a transcript card you drop into a folder or a text field. Free, MIT licensed, installed with Homebrew or the DMG.

[Visit usetalkify.app →](https://usetalkify.app)
