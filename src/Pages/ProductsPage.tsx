import { useState } from "react"
import { CreateProduct } from "../components/CreateProduct"
import { Modal } from "../components/Modal"
import { Product } from "../components/Product"
import { useProducts } from "../hooks/Products"
import { IProduct } from "../models"

export function ProductPage() {
    const {loading, error, products, addProduct} = useProducts()
  const [modal, setModal] = useState(false)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }


  return (
    <div className="container mx-auto max-w-2xl pt-[70px]">
      { loading && <p className='text-center font-bold'>Loading...</p> }
      { error && <p className='text-center font-bold text-red-700'>{error}</p> }
      { products.map(product => <Product product={product} key={product.id} />)}
      {modal && <Modal title='Create new product' onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button onClick={() => setModal(true)} className='fixed bottom-5 right-5 rounded-full py-5 px-5 bg-slate-600 text-white opacity-90 hover:opacity-100'>Add</button>
    </div>
  );
}