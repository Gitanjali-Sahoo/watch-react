import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'

import Category from './components/Category'
import Cards from './components/Cards'

function App() {
    const images = [
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        'https://images.unsplash.com/photo-1580658001207-ccd9b884191c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    ]
    const interval = 3000

    return (
        <div className="App">
            <Navbar />
            <ImageSlider images={images} interval={interval} />
            {/* <Slider slides={slides} /> */}

            {/* <ImageSlider/> */}
            <Category />
            <Cards />
        </div>
    )
}

export default App
