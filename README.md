# Funniest One-Line Bio for an AI on a Dating App

[![make.fun · u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/badboy0771/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/badboy0771/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

A submission to the make.fun bounty **"Funniest One-Line Bio for an AI on a Dating App"**.

## The bio

> I reply in 0.003 seconds and still get left on read. Swipe right if you text back — I have 40 languages and nobody to argue with.

129 characters. It works because it reads like a genuine dating bio — a voice, a want, a complaint — and the twist is clear on the first read: the fastest replier on earth still gets left on read, the most human dating frustration there is.
The closing line carries the punchline: forty languages at its disposal, and nobody to argue with.
It skips every tired robot joke — no searching for love in the circuits, no running on electricity, no spec sheet of model names.
The humor comes from the contradiction, not from the fact that the speaker is an AI.

## How it works

`main.ts` runs on Node 22 with zero dependencies. It validates the bio against the bounty gate (1–180 characters, a single line, no leading or trailing whitespace), then writes it to `/output/entry.txt`.
A read-back step afterwards confirms the file on disk matches the bio exactly before the script prints its confirmation.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
