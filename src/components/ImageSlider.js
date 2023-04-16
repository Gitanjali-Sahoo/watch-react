import React, { useState, useEffect, useContext } from 'react'
import MyContext from '../components/MyContext'
import styled from 'styled-components'

const ImageSlider = ({ images, interval }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((index + 1) % images.length)
        }, interval)
        return () => clearInterval(timer)
    }, [index, images.length, interval])

    const value = useContext(MyContext)

    return (
        <div>
            <Wrap>
                <TitleText>
                    <h2
                        style={{
                            fontSize: '3rem'
                        }}
                    >
                        {value}
                    </h2>

                    <p
                        style={{
                            fontSize: '1.9rem'
                        }}
                    >
                        Explore Here
                    </p>
                </TitleText>
                <img src={images[index]} alt="slider" />
            </Wrap>
        </div>
    )
}

export default ImageSlider

// const Wrap = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     & img {
//         width: 100%;
//         height: auto;
//         margin: 0 auto;
//     }
// `
// const TitleText = styled.div`
//     position: absolute;
//     color: white;
//     font-size: 24px;
//     font-weight: bold;
//     text-align: center;
//     z-index: 1;
//     padding-bottom: 80vh;
// `

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

    @media screen and (max-width: 768px) {
        & img {
            max-width: 100%; /* reduce the max-width for smaller screens */
        }
    }
`

const TitleText = styled.div`
    position: absolute;
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    padding-bottom: 80vh;
    @media screen and (max-width: 1500px) {
        font-size: 30px; /* adjust font size for smaller screens */
        padding-top: 40vh;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px; /* adjust font size for smaller screens */
        padding-top: 3vh;
    }
    @media screen and (max-width: 500px) {
        font-size: 12px; /* adjust font size for smaller screens */
        padding-top: 20vh;
    }
`
