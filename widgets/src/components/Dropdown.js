import React, {useEffect, useRef, useState} from "react"

const Dropdown = ({options, selected, onSelectedChange, dropdownLabel}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return
            }

            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick, {capture: true})

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true})
        }
    }, [])

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    const active = open ? 'visible active' : '';
    const transition = open ? 'visible transition' : '';

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{dropdownLabel}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${active}`}
                >
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${transition}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown