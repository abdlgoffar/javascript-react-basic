import { useEffect, useState } from "react"


const Test3 = () => {
    const [online, setOnline] = useState(false);
    useEffect(() =>{
        console.log(`use effect with deps parameter, im now ${online ? "online" : "offline"}`);
    }, [online])
    return (
        <>
            <button onClick={() => setOnline(online => !online)}>set online/offline</button>
        </>
    )
}
export default Test3;