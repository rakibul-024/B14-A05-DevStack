# Dev Stack

Dev Stack is an interactive technology explorer for developers. Browse frontend, backend, database, language, styling, DevOps, and developer tools, then build a personal stack by selecting the technologies you want to use.

---

## 🛠️ Technologies Used

* **React.js** 
* **Tailwind CSS**
* **DaisyUI** 
* **TypeScript**
* **React-Toastify**
* **JSON data loaded from `public/data.json`**

---

## ✨ Features

1. **Responsive navigation:** Sticky desktop navigation and a working mobile menu.
2. **Dynamic Stack Builder:** Add or remove items from "Your Stack" in real time with duplicate protection.
3. **Responsive technology explorer:** Cards adapt from one column on mobile to three columns on desktop.

---
## ❓ React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes writing React components much simpler and easier to read.

---

**2. What is the difference between props and state?**
* **Props:** Data passed from a parent component. It is read-only and cannot be changed by the child component.
* **State:** Private data managed inside the component itself that can be updated over time.

---

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` stores changing component data. This project uses it for loaded technologies, loading status, mobile menu, and selected stack items.

---

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` handles side effects like fetching external data. It resolves the local JSON fetch and places the result in component state.

---

**5. Why does every item in a `.map()` list need a unique key prop?**
The `key` prop helps React track which items in a list are changed, added, or removed. Without unique keys, React shows a warning and can mismanage list items during updates.

---

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI elements based on specific conditions (like using `if/else` or `? :`).
* **Example:** I used it in the sidebar—if the stack list is empty, it shows an *"Empty Stack"* message; otherwise, it displays the selected tech items.

---

**7. How do you pass data from parent to child, and how does a child send data back to the parent?**
* **Parent to Child:** Passed directly down as **props** (e.g., `<Card tech={item} />`).
* **Child to Parent:** The parent passes a **handler function** via props, and the child calls that function when an event (like a button click) happens.