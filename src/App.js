import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import About from './pages/About.tsx'

import Home from './pages/Home'
import ProductPage from './components/ProductPage'
import Form from './components/Form'


function App() {
    return (
        <>
            <div className="App">
                <Navbar />





                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/about"
                        element={<About name={'Enter your email'} />}
                    />

                    <Route
                        path="/products/:productId"
                        element={<ProductPage />}
                    />
                    <Route path="/form" element={<Form />} />
                </Routes>

                <Footer />
            </div>
        </>
    )
}

export default App
