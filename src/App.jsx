import Navigation from "./components/Navigation"
import Books from "./components/Books"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import SingleBook from "./components/SingleBook"


import Cart from "./components/cart/Cart"
import Checkout from "./components/Checkout"


function App() {
  return (
    <Router>
    <div className="relative font-[Manrope] before:absolute before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]"
    >
      <Navigation />
      <main className="my-10 lg:my-14">
      <Routes>
    <Route path="/" element={<Books />} />
    <Route path="/books/:id" element={<SingleBook />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    </Routes>
    
      </main>
      <Footer />
    </div>
    </Router>
  )
}

export default App
