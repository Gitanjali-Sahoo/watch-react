import React from 'react'
import productsData from '../data/product.json'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductList = () => {
    return (
        <Wrap>
            <HeroText>Our Favourites</HeroText>
            <div className="product-list">
                {productsData.map((product) => (
                    <Card
                        className="card-wrapper"
                        style={{ width: '18rem' }}
                        key={product.id}
                    >
                        <Card.Img
                            className="card-image"
                            variant="top"
                            src={product.image}
                            alt={product.alt}
                        />
                        <Card.Body>
                            {/* <CardTitle>{product.name}</CardTitle> */}
                            <Link
                                className="Product-Link"
                                to={`/products/${product.id}`}
                            >
                                {product.name}
                            </Link>
                            <CardText>{product.brand}</CardText>
                            <Button className="card-btn" variant="primary">
                                Add to Cart
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Wrap>
    )
}

export default ProductList

const Wrap = styled.div`
    .product-list {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 20px;
    }
    .Product-Link {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    .card-image {
        width: 100%;
        height: 200px;
    }
    .card-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* width: 300px; */
        margin: auto;
    }
    .card-btn {
        background-color: aqua;
        color: black;
        padding: 4px 10px;
        border: none;


        transition: box-shadow 0.3s ease-in-out;
    }

    .card-btn:hover {
        box-shadow: 0px 0px 20px goldenrod;
background-color: goldenrod;
transition: box-shadow 0.5s ease-in-out;
outline: none;
    }
`
const HeroText = styled.div`
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
`
const CardText = styled.div`
    padding-bottom: 5px;
`
// const CardTitle = styled.div`
//     padding: 0;
//     font-size: 1.2rem;
//     font-weight: bold;
// `
