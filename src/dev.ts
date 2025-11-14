import { existsSync, rmSync } from "fs"

if (process.argv[2] === `-h`) {
  await Bun.$`bun main.ts -h`
  process.exit()
}

if (existsSync(`workspace`)) rmSync(`workspace`, { recursive: true, force: true })

await Bun.$`bun main.ts workspace`
await Bun.$`cd workspace && bun i && bun dev`
