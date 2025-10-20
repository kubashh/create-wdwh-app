#!/usr/bin/env bun

import { cpSync, renameSync } from "fs"
import path from "path"

if (process.argv.length <= 2) {
  console.log(`
You must specyfy path! '.' means current directory. Run -h for help
`)
  process.exit(0)
} else if (process.argv.includes(`-h`)) {
  console.log(`
create-wdwh-app

USAGE:

  create-wdwh-app .         # create app in current directory
  create-wdwh-app my-app    # create app in 'my-app' directory
  create-wdwh-app -h        # print help and exit
`)
  process.exit(0)
}

await createWdwhApp()

async function createWdwhApp() {
  const examplePath = `${__dirname}/template`
  const outPath = path.join(process.cwd(), process.argv[2])

  console.log(`Copying files...`)

  cpSync(examplePath, outPath, { recursive: true, force: true })
  renameSync(`${outPath}/gitignore.txt`, `${outPath}/.gitignore`)
  renameSync(`${outPath}/bunfig.toml.txt`, `${outPath}/bunfig.toml`)

  await Bun.$`bun i`

  console.log(`Done.`)
}
