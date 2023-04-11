import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
// import Slider from './components/Slider'
import Category from './components/Category'

function App() {
    const images = [
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        'https://images.unsplash.com/photo-1580658001207-ccd9b884191c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    ]
    const interval = 3000
    // const slides = [
    //     {
    //       title: 'Slide 1',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    //     },
    //     {
    //       title: 'Slide 2',
    //       description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //     },
    //     {
    //       title: 'Slide 3',
    //       description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    //     }
    //   ];

    return (
        <div className="App">
            <Navbar />
            <ImageSlider images={images} interval={interval} />
            {/* <Slider slides={slides} /> */}

            {/* <ImageSlider/> */}
            <Category />
        </div>
    )
}

export default App
