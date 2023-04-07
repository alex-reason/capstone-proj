import { Navigation, Home, Reserve, Footer } from "./components"
import { useState } from "react";
const App = () => {
  const [content, setContent] = useState('home');


  return (
    <div className='app'>
        <Navigation />
        {content === 'home' ?  <Home />: <Reserve />}

        <Footer />
    </div>
  )
}

export default App;