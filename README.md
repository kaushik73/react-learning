# EP-12 Lets Build Our Store :

We can assume redux store as a big JS object.

In this Object we have multiple slices like : cart , theme , loginInfo.

![alt text](image.png)

**FOR WRITE :** on click of add it dispatch an action that call a reducer and then reducer modifies slice.

funx == reducer.

**FOR READ :** subscribe to store using selector . — know as Subscribing the store.

**OLD NOTES :** dispatch -> reducer ko use karte hue store ki values m change karta hai.

```jsx
// const sote = useSelector((store) => store);
// const cartItems = store.cart.items
// this above code subs. to whole store - decrease performance
const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);
```

---

**CONCEPT :**

```jsx
<button onClick={handleAddItem()}>Add+</button>
```

- Here, `handleAddItem()` is called immediately when the component renders, not when the button is clicked.
- As a result, the function is not called when the button is clicked; instead, it is called once during the initial render.

---

## **Mutating The Redux state**

```jsx
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
      // or we can do :  return []
      // but state= {items : [] }will not work
    },
```

Here we are mutating the state which react do not allow but behind the scene redux-toolkit uses IMMER library to do this.

In clearCart we cannot do state = [] :
As state is a local copy of initialState and we want to mutate/modify initialState not local state variable.

**So ReduxToolkit says either mutate the current state or return a new state.**
