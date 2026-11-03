#!/bin/sh
# Rebuilds tailwind.min.css from your HTML. Run in the folder that holds your HTML file.
npx tailwindcss@3.4.17 -c tailwind.config.js -i input.css -o tailwind.min.css --minify
