#!/bin/bash

# Check if node_modules directory exists
if [ -d "node_modules" ]; then
  rm -rf node_modules
fi

# Check if package-lock.json file exists
if [ -e "package-lock.json" ]; then
  rm package-lock.json
fi

# Install dependencies using npm
npm install
