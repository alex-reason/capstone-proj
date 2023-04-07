import { Navigation, Home, Reserve, Footer } from "./components"
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reserve' element={<Reserve />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App;