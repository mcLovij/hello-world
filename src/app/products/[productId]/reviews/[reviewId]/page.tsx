export default function ReviewDetail({params}: {
    params: {
        productId: String
        reviewId: String
    }
}) {
    return <h1>Review {params.productId} of Product {params.reviewId}</h1>
}