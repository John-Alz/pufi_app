import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Gallery from './components/Gallery/Gallery'
import Navbar from './components/Navbar/NavBar'
import Products from './components/Products/Products'
import Slider from './components/slider/Slider'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Products/>
      <Gallery/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
