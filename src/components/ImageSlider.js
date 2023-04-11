import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ImageSlider = ({ images, interval }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((index + 1) % images.length)
        }, interval)
        return () => clearInterval(timer)
    }, [index, images.length, interval])

    return (
        <div>
            <Wrap>
                <TitleText>
                    <h2>Lovely Watches</h2>
                    <p>Explore Here</p>
                </TitleText>
                <img src={images[index]} alt="slider" />
            </Wrap>
        </div>
    )
}

export default ImageSlider

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    & img {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
`
const TitleText = styled.div`
    position: absolute;
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    padding-bottom: 100vh;
`
