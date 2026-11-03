# Computer Power

[![Latest release](https://img.shields.io/github/v/release/LazyAdmin22/StreamDeck-ComputerPower?label=release)](https://github.com/LazyAdmin22/StreamDeck-ComputerPower/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/LazyAdmin22/StreamDeck-ComputerPower/total)](https://github.com/LazyAdmin22/StreamDeck-ComputerPower/releases)
[![License: MIT](https://img.shields.io/github/license/LazyAdmin22/StreamDeck-ComputerPower)](LICENSE)
![Platform](https://img.shields.io/badge/platform-Windows-0078D6)
![Stream Deck SDK](https://img.shields.io/badge/Stream%20Deck%20SDK-3-orange)
![Node](https://img.shields.io/badge/node-%3E%3D24-339933)

A Stream Deck plugin with four keys for controlling a Windows PC: **Shutdown**, **Sleep**, **Restart**, and **Logout**.

## Features

- **Hold to confirm** — every key requires a ~800ms press before it fires. A quick tap does nothing and flashes the built-in red "alert" X; a sustained press flashes the green "ok" check and runs the command. This guards against accidental presses on destructive actions.
- **Cyberpunk neon icons** — Shutdown (magenta), Restart (cyan), Sleep (purple), Logout (cyan→magenta gradient), each with a soft glow.
- **Editable titles** — each key's Title field can be customized in the Stream Deck app.

## Requirements

- [Stream Deck](https://www.elgato.com/en/s/welcome-to-stream-deck) software 7.1+
- Windows 10+
- Node.js 24+ (only needed for building from source)

## Install

Grab the latest `.streamDeckPlugin` release and double-click it, or build from source:

```bash
npm install
npm run build
npx @elgato/cli link com.lazyadmin22.computer-power.sdPlugin
```

Then open the Stream Deck app, find the **Computer Power** category, and drag the four actions onto your keys.

## Development

```bash
npm run watch
```

Rebuilds on save and restarts the plugin inside the Stream Deck app automatically.

```bash
npx @elgato/cli validate com.lazyadmin22.computer-power.sdPlugin
```

Validates the manifest/bundle against the Stream Deck SDK schema.

## How it works

Each action is a small TypeScript class (`src/actions/*.ts`) extending a shared `HoldToConfirmAction` base (`src/actions/hold-to-confirm-action.ts`) that times the key press and only invokes the underlying Windows command once the hold threshold is met:

| Action | Command |
|---|---|
| Shutdown | `shutdown /s /t 0` |
| Restart | `shutdown /r /t 0` |
| Logout | `shutdown /l` |
| Sleep | `rundll32.exe powrprof.dll,SetSuspendState 0,1,0` |

Built with the [Elgato Stream Deck SDK](https://docs.elgato.com/sdk) (`@elgato/streamdeck`) and bundled with Rollup.
