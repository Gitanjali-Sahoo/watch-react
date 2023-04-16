import React, { useContext } from 'react'
import videoBg from '../assests/videoBg.mp4'
import MyContext from '../components/MyContext'

function VideoFile() {
    const value = useContext(MyContext)
    return (
        <div className="main">
            <div className="overlay"></div>

            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1>{value}</h1>
                <h5>Explore Here</h5>
            </div>
        </div>
    )
}

export default VideoFile
