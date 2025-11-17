#!/usr/bin/env bun

import { cpSync, renameSync } from "fs"
import path from "path"

if (process.argv.length <= 2) {
  console.log(`
create-wdwh-app

USAGE:

  create-wdwh-app my-app    # create app in 'my-app' directory, "." for current directory
`)
  process.exit()
}

createWdwhApp()

function createWdwhApp() {
  const examplePath = `${import.meta.dirname}/template`
  const outPath = path.join(process.cwd(), process.argv[2])

  cpSync(examplePath, outPath, { recursive: true, force: true })
  renameSync(`${outPath}/gitignore.txt`, `${outPath}/.gitignore`)

  console.log(`Run "bun i && bun dev" and start development!`)
}
