
const Image = () => {
    return <img
        className="object-fit-contain rounded"
        src="https://ik.imagekit.io/9um5tdigihm/8/storage/catalog/campaign/12150/1/12150_3_dd81248939a3c51d742d4a68ade09ab1_1670571689.png?tr=n-w1200:n-q80"
        style={{ height: "29em", width: "29em", alignSelf: "flex-end"}}
    />
}

function MainThumbnail() {
    return (
        <Image></Image>
    )
}

export default MainThumbnail