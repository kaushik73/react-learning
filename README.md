# Ep-11 : Data is New Oil :

if parent comp. controls the child comp. that it is known as controlled component otherwise uncontrolled comp.

---

To avoid prop drilling we use react Context.

Lets say we have a UserContext. we can use this is two ways, 1st is preferred and mostly used, 2nd used in class components majorly.

`1st :` const data = useContext(UserContext);

<p>Name : data.name</p>

`1st :` const {name} = useContext(UserContext);

<p>Name : name</p>

`2nd :` {

<p>Name :

<UserContext.consumer>

{(data) = > <p>{data.name} </p>}

</UserContext.consumer>

</p>

}
