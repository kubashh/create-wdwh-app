#!/usr/bin/env bun
// @bun
import{cpSync as t,renameSync as o}from"fs";import n from"path";if(process.argv.length<=2)console.log(`USAGE:

  create-wdwh-app my-app    # create app in 'my-app' directory, "." for current directory
`),process.exit();p();function p(){let r=`${import.meta.dirname}/template`,e=n.join(process.cwd(),process.argv[2]);t(r,e,{recursive:!0,force:!0}),o(`${e}/gitignore.txt`,`${e}/.gitignore`),console.log('Run "bun i && bun dev" and start development!')}
