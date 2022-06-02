import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title: "What is React?",
        content: "React is a frontend Javascript framework"
    },
    {
        title: "Why use React?",
        content: "React is a famous JS library amongst engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
]

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default App

