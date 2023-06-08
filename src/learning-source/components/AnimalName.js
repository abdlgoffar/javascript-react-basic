import { useState } from "react"
  
const AnimalName = () => {
    //contoh cara pembuatan use state, disini terdapat var name, dengan setName untuk method setter data name tersebut
    const [name, setName] = useState("TIGER")
    function change() {
        setName("LYON");
    }
    return (
        <>
            <h3>{name}</h3>
            <button onClick={change}>change</button>
        </>
    )
}
export default AnimalName;