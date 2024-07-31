# EP-6 : Exploring the world

Monolith VS Micro Service architecture :-

![alt text](notesImages/image.png)

Nowadays, we follow Micro Service Archi.

---

Showing data can be done in 2 ways :

— page loads > Call API > Render Page

— page loads > Render Page > Call API > Render Page (Better Approach) (we will use this)

2 renders are OK, we want better user experience.

---

![alt text](notesImages/image-2.png)

PARAMETER vs ARGUMENT

UseEffect Hook :

- Called after component renders.
- fetch() method is of browser or we can say our JS engine has.
-
- Below code Output : **Body rendered** then use Effect Called

![alt text](notesImages/image-3.png)

---

Conditional Rendering : Rendering based on condition.

### **Whenever listOfRestaurents variable gets updated react will re-ender this Body component.**

Means : Whenever state variable updates, react triggers the re-conciliation cycle(re-render component).

— listOfRestaurents is a constant variable then how it is getting updated ?

Ans : so setListOfRestaurents updates the listOfRestaurents and have new instance of Body comp. and then re-render , so now listOfRestaurents is having the new updated value.
