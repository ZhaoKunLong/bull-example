##
- eslint
 - v8 need Node.js (^12.22.0, ^14.17.0, or >=16.0.0
 - v8 can run `npm init @eslint/config`
 - v7 can run `npx eslint --init`
 - ignoring files we don't want lint touch `.eslintignore`
 - run it  `npx eslint . --ext .ts --fix`
- Add nestjs eslint rule 
  - `npm install --save-dev eslint-plugin-nestjs`
- typescript 
  - `npm i typescript --save-dev`
  - `npx tsc --init`
  - add the `outDir` and `sourcemap`
  - experimentalDecorators: true

- nest
 - `npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata`
 - add nest-cli.json
 - add tsconfig.build.ts