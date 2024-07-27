# EP-4 Talk is cheap :-

passing a prop to a comp === passing a argument to a funx.

functional comp === a JS funx.

props === properties

---

```jsx
const RestaurantsList = () => {
  return (
    <div className="card-container">
      {restaurents.map((restaurent) => {
        return <RestaurantCard restaurent={restaurent} name="kaushik" />;
      })}
    </div>
  );
};
const RestaurantCard = ({ restaurent, name }) => {
  console.log(restaurent);
  return (
    <div>
      <div className="card">
        <div>{name}</div>
        <div>{restaurent.name}</div>
```

Restaurent card se restaurent , name ek object mai band hoke rescaurentCard ko milte hai aur phir vaha usko destructor kardiya too direct use kar paa rahe hai agar { restaurent, name } jagah props likha hota too <div>{props.name}</div>

**destructuring ⇒** { restaurant, name } = props;

---

### Config Driven UI :

Controlling how your UI will look based on config data.

Eg : swiggy site pe carousel aman m alag dikh raha hai and kaushik ko alag vo hua dono ki config alag alag thi isliye. and if kisike config nahi hua too carousel dikhega hi nahi this is called Config Driven UI.

---

Why it’s need to paas key when mapping over any list ?

→ A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted.

→ for better reconcilation (`Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` )
