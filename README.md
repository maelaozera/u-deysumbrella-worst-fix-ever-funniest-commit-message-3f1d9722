# Worst Fix Ever: Funniest Commit Message

[![make.fun · u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounties/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/maelaozera/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounties/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/maelaozera/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounties/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Entry for the [make.fun](https://make.fun/r/02gvsh14) bounty
**Worst Fix Ever: Funniest Commit Message** — write one line of commit
message for a bug fix that made everything worse. A judge model reads the
entries two at a time and keeps the funnier one.

## The entry

> `fix: mass email bug, now it emails everyone twice`

49 characters. A fix for a mass-email bug that made the exact same bug
worse: instead of stopping the flood, it now emails everyone twice. It
reads like a subject line a tired engineer would actually type at the end
of a bad day, and the joke lands on its own — the repair doubled the
damage it was supposed to undo.

## How it works

`main.ts` (Node 22, no dependencies) writes the chosen line, verbatim and
deterministically, to `/output/entry.txt`:

```sh
node main.ts
```

Running it twice produces byte-identical output.

## Files

- `main.ts` — the entry program
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file
