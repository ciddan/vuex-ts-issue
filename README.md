### Instructions

Reproduction of an issue with the TypeScript type definitions in Vuex.

1. Clone the repo.
2. ```npm install```
3. ```npm start```
4. Open browser and go to http://localhost:8080.
5. Open dev tools and look at the console output.

#### Issue details

This is incorrect:
https://github.com/vuejs/vuex/blob/4d573e9960f8cca33fdf9051521a203b03b18ae5/types/index.d.ts#L6

Looking at vuex.js and vuex.common.js all of these functions are exported in the default export, not as named exports. This breaks our TypeScript/SystemJS project - since the TypeScript type of the default export only contains Store and install. Importing the map functions as named exports, i.e:
``` typescript
import { mapActions } from "vuex";
```
doesn't work either - since they're undefined at run time (SystemJS handles default and named exports differently).

With "system" as the module format defined in tsconfig.json usage of a a named export is compiled to:
``` javascript
vuex_1.mapActions
```
Whereas usage of a default export is compiled to:
``` javascript
vuex_1.default.Store
```

The map functions should be exported together with Store and install here:
https://github.com/vuejs/vuex/blob/4d573e9960f8cca33fdf9051521a203b03b18ae5/types/index.d.ts#L129-L132

For reference, this is the export from vuex.js:
https://github.com/vuejs/vuex/blob/4d573e9960f8cca33fdf9051521a203b03b18ae5/dist/vuex.js#L925-L936
