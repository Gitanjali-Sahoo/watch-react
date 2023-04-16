import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import styled from 'styled-components'
function BasicExample() {
    return (
        <Wrap>
            <div className="category-wrap">
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="/images/joycoast-wood-watches-sunglasses-fFOar3AwgzQ-unsplash.jpg"
                    />
                    <CardBody>
                        <Card.Title></Card.Title>
                        <CardButton>
                            <Button variant="primary">Men's Watch</Button>
                        </CardButton>
                    </CardBody>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="/images/lola-rose-WDoxXXnccys-unsplash.jpg"
                    />
                    <CardBody>
                        <CardButton>
                            <Button variant="primary">Women's Watch </Button>
                        </CardButton>
                    </CardBody>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="/images/paul-cuoco-SLU0U_a6fbQ-unsplash (2).jpg"
                    />
                    <CardBody>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text> */}
                        <CardButton>
                            <Button variant="primary">Unisex Watch</Button>
                        </CardButton>
                    </CardBody>
                </Card>
            </div>
        </Wrap>
    )
}

export default BasicExample

const Wrap = styled.div`
    .category-wrap {
        display: flex;
        flex-wrap: wrap; /* add flex-wrap property to wrap cards */
        justify-content: space-evenly;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    @media (max-width: 900px) {
        .category-wrap {
            flex-direction: column; /* stack cards vertically */
            justify-content: center; /* center cards */
            gap: 20px;
        }
    }

    @media (max-width: 576px) {
        .category-wrap {
            padding-top: 10px; /* reduce top padding */
            padding-bottom: 10px; /* reduce bottom padding */
        }

        Card {
            width: 80%; /* reduce card width */
        }

        CardBody {
            padding: 5px 0; /* reduce card body padding */
        }

        CardButton {
            & Button {
                font-size: 1.2rem; /* reduce button font size */
            }
        }
    }
`
const CardBody = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 0;
`
const CardButton = styled.div`
    & Button {
        color: black;
        background-color: white;
        border: none;
        text-align: center;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.6rem;
        padding: 0;
    }
    Button:hover {
        background-color: white;
        color: black;
    }
`
