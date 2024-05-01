export default function ProductDetail({params,}: {
    params: { productId: String }
}) {
    return <h1>Product Detail of {params.productId}</h1>
}