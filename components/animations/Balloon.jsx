import { useState, useEffect } from "react";
const Balloon = ({timing = 250, scale = 1.15, children}) => {
const [entered, setEntered ] = useState(false);

const style = {
    display: 'inline-block',
    transform: entered ? `scale(${scale})` : `scale(1)`,
    transition: `transform ${timing}ms ease-out`
}

useEffect(() => {
    
    const timeoutId = window.setTimeout(() => {
        setEntered(false);
    }, timing);


    return () => {
        window.clearTimeout(timeoutId)
    }
},[entered, timing]);

const trigger = () => {
    setEntered(true)
}

    return (
        <span onMouseEnter={trigger} style={style}>
        {children}
        </span>
    )
}

export default Balloon