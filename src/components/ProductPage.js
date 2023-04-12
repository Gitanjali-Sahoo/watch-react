// import React, { useState, useEffect } from 'react'
import products from '../data/product.json'
import styled from 'styled-components'

// const ProductDetails = ({ match }) => {
//     const [product, setProduct] = useState({})

//     useEffect(() => {
//         const fetchProduct = async () => {
//             const foundProduct = productsData.find(
//                 (product) => product.id === parseInt(match.params.productId)
//             )
//             setProduct(foundProduct)
//         }
//         fetchProduct()
//     }, [match.params.productId])

//     return (
//         <div>
//             <h1>{product.name}</h1>
//             <p>Price: {product.price}</p>
//             <p>Description: {product.brand}</p>
//         </div>
//     )
// }

// export default ProductDetails

import { useParams } from 'react-router-dom'

function ProductPage() {
    const { productId } = useParams()

    const product = products.find((product) => product.id === productId)

    return (
        <div className="product-details">
            <ImageWrapper>
                <img src={product.image} alt={product.alt} />
                <Description>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>SKU: {product.brand}</p>
                    <button>Add to Cart</button>
                </Description>
            </ImageWrapper>
        </div>
    )
}

export default ProductPage
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    & img {
        height: 500px;
        width: 500px;
        flex: 50%;
    }
`
const Description = styled.div`
    flex: 50%;
`
