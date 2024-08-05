# EP:13 - Time To Test :-

## **`after 03:00 its pending`**

**Types of testing :-**

- Unit testing : test comp. in isolation
- Integration testing : testing integration of components.
- End to End testing (e2e) : What user can do on the application.

---

If we have made project with create-react-app then it already has react testing library.

React testing library uses JEST behind the scenes. JEST uses babel behind the scenes.

---

## Setting up Testing in our app

Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest : npx jest --init
Install jsdom library

Install @babel/preset-react - to make JSX work in test

Configure babel for @babel/preset-react

Install testing-library/jest-dom

---

Setting up Testing :

npm install -D @testing-library/react jest
npm install --save-dev babel-jest @babel/core @babel/preset-env

https://jestjs.io/docs/getting-started#using-babel : for below

make a file babel.config.js

```
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

---

now parcel also uses Babel behind the scene and now we are configuring babel according to us..

this raises the conflict among them

TO solve above issue : https://parceljs.org/languages/javascript/#usage-with-other-tools

_.parcelrc:_

`{  "extends": "@parcel/config-default",  "transformers": {    "*.{js,mjs,jsx,cjs,ts,tsx}": [      "@parcel/transformer-js",      "@parcel/transformer-react-refresh-wrap"    ]  }}`

---

now we have to do jest configuration : npx jest - - init

√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » babel
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes

---

now install js-dom library also if using jest version≥28

npm install --save-dev jest-environment-jsdom

---

Now to make JSX works in testing we have to do : npm -i -D @babel/preset-react

now add this to babel.config.js as well :

```
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  presets: [["@babel/preset-react", { runtime: "automatic" }]],
};

```

---

Now install testing-library/jest-dom to make _toBeInTheDocument_ work.

---

**Folder and File Naming Rules :**

now either create a **test** folder anywhere **OR** create a file name with

Header.test.js, Header.spec.js,

Header.test.ts, Header.spec.ts

To Run a Particular Test : npx jest --testPathPattern=RestaurantCard.test.js

To continue run test cases : jest -- watch

---

Whenever there is state update, api call then wrap render inside act method.

act comes from react-dom/test-utils
