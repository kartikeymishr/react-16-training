import React, {useState} from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
    {
        label: "The Colour Red",
        value: "red"
    },
    {
        label: "The Colour Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    )
}

export default App

