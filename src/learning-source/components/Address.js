//contoh cara pembuatan props di react.
//component di bawah akan mempunyai parameter atau biasa disebut dengan props di react.
const Address = (props) => {
    return (
        <div className="CompAddress">
            {/* cara penggunaan props di react */}
            <p>{props.addressName}</p>
            <p>{props.country()}</p>
        </div>
    )
}
export default Address;
//dan jika ingin mengetahui bagaimana cara pemberian value pada props atau component parameter lihat di file App.js