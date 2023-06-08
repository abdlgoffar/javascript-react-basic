import Button from "./Button";
import ButtonText from "./ButtonText";
const Form = () => {
    return (
        <>
        {/* contoh cara membuat props node pada react, dimana disini component Button bisa menerima component lain di dalamnya dengan symbol <></> sebagai pembatasnya*/}
        <Button text={<><ButtonText/></>}></Button>
        </>
        
    )
}
export default Form;