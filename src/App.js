import { Navigation, Home, Reserve, Footer, ConfirmationPage, Header, CancelledPage } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navigation />
        <Header />
        <Routes>
          <Route path='/capstone-proj' element={<Home />} />
          <Route path='/capstone-proj/reserve' element={<Reserve />} />
          <Route path='/capstone-proj/confirmation' element={<ConfirmationPage />} />
          <Route path='/capstone-proj/cancelled' element={<CancelledPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;