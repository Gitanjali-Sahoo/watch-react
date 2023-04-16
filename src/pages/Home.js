import React from 'react'
// import ImageSlider from '../components/ImageSlider'
import Category from '../components/Category'
import Cards from '../components/Cards'
import MyContext from '../components/MyContext'

import VideoFile from '../components/VideoFile'

function Home() {
    // const images = [
    //     'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
    //     'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //     'https://images.unsplash.com/photo-1615357291590-534b23453de2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //     'https://images.unsplash.com/photo-1612177343582-665b93b34403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80'
    // ]
    // const interval = 3000
    return (
        <>
            {/* <MyContext.Provider value="Lovely Watches">
                <ImageSlider images={images} interval={interval} />
            </MyContext.Provider> */}
            
            <MyContext.Provider value="Elevate Your Style with Our Timeless Watches">
                <VideoFile />
            </MyContext.Provider>

            <Category />
            <Cards />
        </>
    )
}

export default Home
