import axios from "axios"
import React, { useState } from "react"
import { IProduct } from "../models"

interface CreateProductProps {
    onCreate : (product: IProduct) => void
  }

  const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 3,
        count: 10
    }
}

export function CreateProduct({onCreate}: CreateProductProps) {

    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        setError('')
        if (value.trim().length == 0) {
            setError('Invalid value')
        }
        productData.title = value
        productData.description = value1

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }

    
    return (
        <form onSubmit={submitHandler}>
            <input type="text" 
            placeholder="Enter product title..." 
            className="border py-2 px-4 mb-2 w-full" 
            value={value} 
            onChange={event => setValue(event.target.value)}
            />

            {error && <p className=" my-2 text-center text-red-700 font-bold">{error}</p>}
            <input type="text" 
            placeholder="Enter product description..." 
            className="border py-2 px-4 mb-2 w-full" 
            value={value1} 
            onChange={event => setValue1(event.target.value)}
            />

            {error && <p className=" my-2 text-center text-red-700 font-bold">{error}</p>}
            <button className="py-2 px-4 border bg-slate-600 m-auto block opacity-90 hover:opacity-100">Create</button>
        </form>
    )
}