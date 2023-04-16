import React from 'react'
import styled from 'styled-components'

function video() {
    return (
        <Wrap>
            <video autoPlay muted loop id="background-video">
                <source src={'https://youtu.be/iI2D4LbV6Os'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Wrap>
    )
}

export default video
const Wrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
`
