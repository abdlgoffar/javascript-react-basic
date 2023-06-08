import { useRef } from "react"

const RecordInt = () => {
    // data event use ref hanya bisa digunakan oleh component yang menggunakan use ref itu, seperti contoh di bawah ada component <button> yg menggunkan use ref jadi hanya component <button> itu yg bisa menerima hasil dari data event use ref
    const number = useRef(0);
    function addNumber() {
        number.current = number.current + 1;
        console.log(number.current);
    }
    return (
        <>
            {/* <p> tidak akan bisa menerima  data use ref karena <p> bukan component pengirim data event use ref */}
            <p>{number.current}</p>
            <button onClick={addNumber}>click</button>
        </>
    )
}
export default RecordInt;