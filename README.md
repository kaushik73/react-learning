# EP-3 Laying Foundation :-

npx parcel index.html ⇒ executing the parcel package

npm run start **EQUALS** npm start

bit npm run build **NOT EQUALS** npm build

---

JSX and React are different

JSX is diff. syntax but we can say it is similar to html

JS engine only understands ecmascript.

**FLOW :** JSX first get converted to react element then react element converted to react element to react element(JS object) then this object get converted to HTML element(we see on browser).JSX to React.createElement is done by **Babel**

```jsx
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
```

From React.createElement to rendering is job of React

So JSX code is transpiled before it reach to JS engine via parcel.

parcel gives this job to babel to transpile.

**Babel** - A JS compiler

**Transpile** - convert to code that engine understand.

---

Functional Comp → a simpe JS functions which returns JSX or which returns react element

---

![alt text](image.png)

React Element VS React fnx comp.

for react elment :⇒ root.render(heading)

for react funx. com :⇒ root.render(<HeaderComponent />);

---

Component Composition - ek comp. me dusra dalna

---

Cross Site Scripting (CSS) :

![alt text](image-1.png)

we are just executing the things which we gets in title in heading component.

and if title comming from api so some hacker can pass wrong script to read cookies or anything

so babel take care for this.

we call call a component like <Navbar/> === <Navbar> <Navbar /> === {Navbar()}
