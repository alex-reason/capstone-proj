import { Navigation, Home, Reserve, Footer, ConfirmationPage, Header } from "./components"
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Navigation />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reserve' element={<Reserve />} />
          <Route path='/confirmation' element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App;