

import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';


function App()
{
  const [products, setProducts] = useState()
  const [search, setSearch] = useState("")


  useEffect(() =>
  {

    // const controller = new AbortController()

    (async () =>
    {
      try
      {
        const products = await axios.get(`/api/products?search=${search}`)


        // console.log(products.data.products)

        setProducts(products.data)
        console.log(products.data.length)


      } catch (error)
      {
        // if (axios.isCancel(error))
        // {
        //   console.log("request canceled")
        //   return
        // }
        console.log("error", error.message)
      }


    })()

    // return () =>
    // {
    //   controller.abort()
    // }

  }, [search])


  return (
    <>
      <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
      <h1>products deta{products?.length}</h1>
    </>
  )
}

export default App
