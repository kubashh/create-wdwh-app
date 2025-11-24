await Bun.$`bun run build`
await Bun.$`bun publish`

// Cleaning
await Bun.file(`./main.js`).delete()
