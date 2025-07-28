#!/usr/bin/env node
import { spawn } from 'child_process';

const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
});

vite.on('close', (code) => {
  console.log(`Vite exited with code ${code}`);
});