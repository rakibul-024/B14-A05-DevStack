# 🚀 B14-A05-DevStack

DevStack is an interactive web platform that helps developers explore frontend, backend, database, and DevOps tools, compare their features side-by-side, and dynamically build their customized tech stack for upcoming projects.

---

## 🛠️ Technologies Used

* **React.js** 
* **Tailwind CSS**
* **DaisyUI** 
* **JavaScript (ES6+)**
* **HTML5 & CSS3**

---

## ✨ Features

1. **Explore Tech Cards:** Browse through popular frameworks, databases, and tools with details like difficulty level and category.
2. **Dynamic Stack Builder:** Add or remove items from "Your Stack" list in real-time.
3. **Empty Stack Message:** Displays an interactive alert or empty message when no tools are selected in your stack.

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
`useState` is used to store and update dynamic data in a component.
* **Where used:** I used it to hold the array of selected technologies in the "Your Stack" sidebar.

---

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` handles side effects like fetching external data. I used it to load the technology data from the JSON file right after the component mounts on the screen.

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