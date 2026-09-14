# 🚀B14-A05-DevStack

Dev Stack is a modern, interactive technology explorer designed for developers. Browse through various categories—including frontend, backend, database, programming languages, styling tools, DevOps, and developer utilities—and curate your customized personal tech stack with real-time feedback.

---

## 🛠️ Technologies Used

- **Frontend Framework:** React.js, TypeScript
- **Styling & UI Components:** Tailwind CSS, DaisyUI
- **Notifications:** React-Toastify
- **Data Source:** Custom JSON (`public/data.json`)

---

## ✨ Key Features

- **📱 Fully Responsive Navigation:** Sticky desktop navbar with a seamless mobile drawer/menu.
- **⚡ Dynamic Stack Builder:** Add or remove technologies from "Your Stack" in real-time, featuring built-in duplicate item protection.
- **🎨 Adaptive Tech Grid:** Responsive card layout transitioning effortlessly from 1 column on mobile to 3 columns on desktop.
- **🔔 Toast Notifications:** Interactive visual feedback when adding or removing items.

---

## ❓ React Concepts & QA

<details>
<summary><b>1. What is JSX, and why is it used in React?</b></summary>

> **JSX (JavaScript XML)** is a syntax extension that allows developers to write HTML-like structures directly inside JavaScript. It streamlines component creation, improves readability, and leverages the full programming power of JS inside UI templates.
</details>

<details>
<summary><b>2. What is the difference between props and state?</b></summary>

> - **Props (Properties):** Immutable (read-only) data passed down from a parent component to a child component.
> - **State:** Internal, mutable data managed within a specific component that can change over time based on user interactions.
</details>

<details>
<summary><b>3. What does the <code>useState</code> hook do, and where did you use it in this project?</b></summary>

> `useState` manages reactive state inside functional components. In this project, it tracks:
> - Fetched technologies array
> - Loading indicator state
> - Mobile menu toggle status
> - User-selected items in "Your Stack"
</details>

<details>
<summary><b>4. What does the <code>useEffect</code> hook do, and why did you need it to load the JSON data?</b></summary>

> `useEffect` handles side effects (such as API calls or DOM updates). It was used here to execute a `fetch()` request for local `public/data.json` upon component mount and populate the component state with the returned data.
</details>

<details>
<summary><b>5. Why does every item in a <code>.map()</code> list need a unique <code>key</code> prop?</b></summary>

> The `key` prop enables React's virtual DOM diffing algorithm to identify which items have changed, been added, or removed. Unique keys ensure optimal re-rendering performance and prevent state bugs in dynamic lists.
</details>

<details>
<summary><b>6. What is conditional rendering? Show one place you used it.</b></summary>

> Conditional rendering displays specific UI elements based on continuous boolean states or conditions (using ternary operators `? :` or `&&`).
> - **Example:** Rendered inside the sidebar component—if the stack list is empty (`stack.length === 0`), it displays an **"Empty Stack"** placeholder; otherwise, it lists the selected tech badges.
</details>

<details>
<summary><b>7. How do you pass data from parent to child, and how does a child send data back to the parent?</b></summary>

> - **Parent ➔ Child:** Data is passed top-down via **props** (e.g., `<Card tech={item} />`).
> - **Child ➔ Parent:** The parent passes a **callback function** as a prop, which the child invokes with data arguments when an event occurs (e.g., clicking an "Add to Stack" button).
</details>
