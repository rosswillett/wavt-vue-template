# Starter Template

Containing:
* Vue
* Vuex
* Tailwind
* ESLint

Ready to build upon

## Installation

* git clone https://github.com/rosswillett/wavt-vue-template.git --depth 1 target_folder
* cd target_folder
* rm -R .git
* (edit package.json if you are spinning a new app)
  * Update package name, version, add your packages, etc
* yarn

## Running

* npm run dev
* npm run build

## Deploying

* after "npm run build" your app will be in the folder "dist"
* You may want to remove the .map (and remove its reference from .js) -OR- edit vite.config.js and change sourcemap to false
* If you are using the dist/index.html you may need to change the css and js tags, their base address is "/assets"
