


const Label = ({text, children, ...props}) => {
    return (
        <>
        {/* {text || children} adalah contoh statement pengecekan pada react dengan opsi jika parameter pertama terdapat data maka data pertama yg akan ditampilkan datanya, dan jika tidak ada maka parameter kedua yg ditampilkan datanya */}
            <label {...props}>{text || children}</label>
        </>
    )
}
export default Label;
