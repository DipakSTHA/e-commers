const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "NEP",
        maximumFractionDigits: 2,
    }).format(price / 100)
}


export default FormatPrice
