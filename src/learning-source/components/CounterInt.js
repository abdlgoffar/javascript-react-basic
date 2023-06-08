import { useState } from "react"
//contoh cara pembuatan counter dengan use state dan bantuan event onClick.
const CounterInt = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={function () {setCounter(counter + 1)}}>add</button>
            <br/>
            <button onClick={function () {setCounter(counter - 1)}}>divide</button>
        </>
    )
}
export default CounterInt;