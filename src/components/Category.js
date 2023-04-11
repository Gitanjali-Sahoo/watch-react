import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import styled from 'styled-components'
function BasicExample() {
    return (
        <Wrap>
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
        </Wrap>
    )
}

export default BasicExample
const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
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
`
