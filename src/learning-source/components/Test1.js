
import { useEffect, useState } from "react"

const Test1 = (props) => {
    const [name, setName] = useState("");
    // contoh cara pembuatan use effect tanpa deps array, use effect seperti ini akan selalu di rerender apabila terjadi action pada component nya.
    useEffect(() => {
        console.log("use effect without deps");
    })
    return (
        <>
            <p>test use effect without deps</p>
            <input type={"text"} value={name} onChange={(e) => setName(e.target.value)}/> 
        </>
        
    )
}
export default Test1;