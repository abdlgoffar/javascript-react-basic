
import { useEffect, useState } from "react"

const Test2 = (props) => {
    const [name, setName] = useState("");
    // contoh cara pembuatan use effect dengan deps empty array, use effect seperti ini hanya akan sekali di rerender saat component nya di load atau saat pertama component nya dipanggil.
    useEffect(() => {
        console.log("use effect with deps empty deps");
    }, [])
    return (
        <>
            <p>test use effect with deps empty</p>
            <input type={"text"} value={name} onChange={(e) => setName(e.target.value)}/> 
        </>
        
    )
}
export default Test2;