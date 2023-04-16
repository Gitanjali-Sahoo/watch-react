import products from '../data/product.json'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { HeartFill, AlarmFill, Watch, Gift } from 'react-bootstrap-icons'
import { useState } from 'react'

function ProductPage() {
    const [clicked, setClicked] = useState(false)

    const { productId } = useParams()

    const product = products.find((product) => product.id === productId)

    return (
        <div className="product-details">
            <DetailsWrapper className="product">
                <div className="image-wrapper">
                    <img src={product.image} alt={product.alt} />
                    <button className="offer-btn">
                        EXTRA 20% DISCOUNT. USE CODE EXTRA20
                    </button>
                </div>

                <Description>
                    <Wrapper>
                        <h2>{product.name}</h2>

                        <HeartFill
                            style={{ color: 'lightgrey', fontSize: '1.5rem' }}
                            className={`${clicked ? '-fill text-danger' : ''}`}
                            onClick={() => setClicked(!clicked)}
                        />
                    </Wrapper>
                    <p> {product.brand}</p>
                    <p
                        style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'lightskyblue'
                        }}
                    >
                        Exclusive
                    </p>
                    <p
                        style={{
                            color: 'red',
                            fontSize: '1.2rem',
                            fontWeight: 'bold'
                        }}
                    >
                        Price: {product.price} Sek
                    </p>

                    <p>Gender: {product.gender}</p>
                    <p style={{ color: 'blue' }}>(with 20% Off )</p>
                    <p>{product.stock} in stock</p>
                    <p>Delivery Policy</p>

                    <button>Add to Cart</button>
                    <hr />
                    <p>
                        <AlarmFill />
                        -Order within 17 hours you will receive it.{' '}
                    </p>
                    <p>
                        <Watch />
                        -Free bracelet adjustment on all orders
                    </p>
                    <p>
                        <Gift />
                        -Gift wrapping available at checkout
                    </p>
                </Description>
            </DetailsWrapper>
        </div>
    )
}

export default ProductPage
const DetailsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 4%;
    background-color: white;
    padding: 3%;
    flex-wrap: wrap;
    align-items: center;

    & img {
        max-width: 100%;
        height: 500px;
    }

    .image-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 50%;
    }

    .offer-btn {
        background-color: #4caf50;
        border: none;
        color: white;
        font-weight: bold;
    }

    .offer-btn:hover {
        background-color: green;
    }

    p {
        font-weight: 600;
    }

    @media only screen and (min-width: 300px) and (max-width: 790px) {
        flex-direction: column;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`
const Description = styled.div`
    flex: 50%;
    padding-left: 30px;
    padding-top: 10px;

    p {
        margin-bottom: 0;
    }
    button {
        background-color: #4caf50;
        border-radius: 10px;
        margin-top: 10px;
        color: white;
        padding: 4px 25px;
        font-size: 1rem;
        border: none;
        font-weight: bold;
    }
    button:hover {
        background-color: green;
    }
`
