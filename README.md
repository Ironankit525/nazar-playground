# Nazar Playground 👁️

A live demo of [Nazar](https://github.com/Ironankit525/nazar), the free AI code reviewer powered by [BharatCode](https://bharatcode.ai).

Each open pull request contains a deliberate mistake. Open one to see how Nazar reviews it:

| PR branch | What's wrong | What Nazar does |
|---|---|---|
| `demo/sql-injection` | User input concatenated into SQL | Critical security comment + one-click parameterized-query fix |
| `demo/leaked-key` | API key hard-coded, `.env` committed | Secret scanner catches it (masked), repo check flags `.env` |
| `demo/missing-await` | Async call used without `await` | Bug comment with fix |
| `demo/hinglish` | React state mutated in place | Review written in Hinglish |
| `demo/clean-refactor` | Nothing! A safe refactor | "✅ No issues found" — no noise |

> All keys and passwords in this repo are **fake** and exist only to demonstrate the secret scanner.

Want this on your repo? Run `npx nazar-review init` or see the [setup guide](https://github.com/Ironankit525/nazar#-install-in-2-minutes).
