


 
const Input = ({type = "text", ...props}) => {
    return (
        <>
            <input {...props} type = {type}/>
        </>
    )

}
export default Input;