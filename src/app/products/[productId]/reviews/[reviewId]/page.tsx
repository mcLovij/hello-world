import notFound from "@/app/products/[productId]/reviews/[reviewId]/not-found";


export  default function ProductReview({params}:{
    params:{
        productId:String
        reviewId:String
    };
}){
    // @ts-ignore
    if (parseInt(params.reviewId) > 100) {
        return notFound();
    }
    return <h1>product {params.productId} and review {params.reviewId}</h1>
}

// export default function ReviewDetail({params}: {
//     params: {
//         productId: String
//         reviewId: String
//     }
// }) {
//     return <h1>Review {params.productId} of Product {params.reviewId}</h1>
// }