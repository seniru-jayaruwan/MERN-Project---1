import './App.css'
import ProductCard from './components/productCard'
import SuperProduct from './components/superProduct'

function App() {
 

  return (
    <>
      <div>
        <SuperProduct></SuperProduct>
       <ProductCard name="samsung" price="1239$" image="https://picsum.photos/id/237/200/300"/>
       <ProductCard name="Apple" price="1239$" image="https://picsum.photos/id/238/200/300"/>

      </div>
      
    </>
  )
}
export default App
