# EP-2 : Ignite Our App

npm does not have any full form.
It is just a package manager
all packages hosted here

to make npm start : npm init

to skip some steps use npm init -y

and after this we will have package.json

what is package.json : configuration of our npm

---

### bundler :

whole code need to be minified , bundled before going to prod

example ⇒ webpack , parcel , vite

create react app behind the scene uses webpack , babel

---

dependencies = packages (allmost same)

---

two dependencies we can install : dev dependencies and normal dependencies

dev dependencies - require in development phase ( use -D )

npm i -D parcel

---

### Transitive dependencies :

parcel has some dependencies on other dependencies and they can also be dependent on some other dependencies

---

Our project has its package.json and the dependencies like parcel also have its own package.json.

Node_Module : Collection of dependencies.

we should push package.lock.json also to github

---

### PARCEL :

Ignite the app : npx parcel index.html

**What Parcel do :**

— Local server.

— Dev build.

— HMR (hot module replacement) — refresh karne pe site reload karna ya update karna new changes k sath.

— Parcel do HMR with help of File Watching Algorithm.

— Parcel builds faster as it do caching, keep things in parcel cache file.

— Minification/bundle for prod.

— Compress the file.

— Image optimization.

— Consistent Hashing.

— Code splitting.

— Differential Bundling = support older browsers.

— Good Error view on Browser.

— Give way to host on https as well.

— Read More : https://parceljs.org/
— Tree Shaking = Remove unused code.

For Prod code :
remove main : ‘FILE_NAME’ from package.json then run
**npx parcel build index.html**
as we are giving entry point in command and in package.json we also have entry point so they conflicts.

this prod build which is in dist folder is highly optimized and minified to ready to deploy to prod.

---

CDN is not preferred way to use react as for every operation we do not want to make network calls.

With npm we can have them in node_modules i.e. locally.

---

When we link app.js in our index.html with

```jsx
<script src="app.js"></script>
```

browser assumes that it is a simple js file. but since we are using import statements here. so we need to use :

```jsx
<script type="module" src="app.js"></script>
```

---

We need to configure for which browsers our app will support :

this is done with help of npm package ‘BrowserList’ : https://browserslist.dev/

on this website type on seach bar and you will get for how much percentage it will be compatible.

![BrowserList](![alt text](/ep-2/image.png))

now for sure our app will be working on these 2 but also work on other(like edge).

By configuring this our code size increase in very small amount.
