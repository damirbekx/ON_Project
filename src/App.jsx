import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Layout } from "./layout/layout";
import './index.css'
import { About } from "./pages/about/about";
import { Product } from "./pages/product/product";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="product/:id" element={<Product/>} />

        </Route>
        <Route path="*" element={<h2>Page not found...</h2>} />
      </Routes>
    </>
  )
}

export default App
