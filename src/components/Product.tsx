import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {
    const [details, setDetails] = useState(false)
    



    const btnBg = details ? 'bg-slate-300' : 'bg-slate-500'
    const btnClasses = ['btn py-2 px-4 my-3', btnBg]

    return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
        <img src={props.product.image} alt={props.product.title} className='w-1/6'/>
        <p>{props.product.title}</p>
        <p className="font-bold">{props.product.price}$</p>
        <button className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}>
            {details ? 'Hide details' : 'Show details'}
        </button>
        {details && <p className="txt text-center">{props.product.description}</p>}
        <p>Rate: <span style={{ fontWeight: 'bold' }}>{props.product?.rating?.rate}</span></p>
    </div>
    )
}