import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import MyContext from './components/MyContext'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About.tsx'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ProductPage from './components/ProductPage'


function App() {
    return (
        <>
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductPage />}
                    />
                </Routes>
                <Footer />

            </div>
        </>
    )
}

export default App
