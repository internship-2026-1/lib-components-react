#!/usr/bin/env node
const { spawn } = require('child_process')
const proc = spawn('npx', ['vite', '--config', 'example/vite.config.ts'], { stdio: 'inherit' })
proc.on('close', (code) => process.exit(code))
