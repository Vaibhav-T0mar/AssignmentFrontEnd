import React, { useEffect, useRef, useState } from 'react'
import "./Section2.css"
const Section2 = () => {
  const [category,setCategory] = useState([])
 let size = useRef(null)
 const [product,setProduct] = useState([])
  
  const onClickHandle = (e)=>{
    console.log(e.target) 
    e.target.style.fontSize = "26px" 
    console.log(size.current)
    
    }
   useEffect(()=>{

    fetch("https://fakestoreapi.com/products/categories")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            return setCategory(data)
        })
        .catch((error)=>{
            return error.message
        })

 
   },[])

   useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            return res.json()
        })
        .then((product)=>{
            return setProduct(product)
        })
        .catch((error)=>{
            return error.message
        })

 
   },[])

  
  
  
  
    return (
    <div className='main1'>
        <div className='section2-cotainer'>
            <h1 className='section-title'>New products</h1>
            <div className='section2-category'>
                <div className='section2u'>
                    <ul className='section2-ul'>
                    {category.map((cat,index)=>{
                        return <li ref={size} onClick={onClickHandle} className='section-2-li' key={index}>
                            {cat}
                        </li>
                    })}
                </ul>
                    </div>
            </div>
            <div className='section2-product'>
                    {product.map((prod)=>{
                        return <div className='product-img'key={prod.id}>
                            <div>
                            <img src={prod.image} alt="not load" />

                            </div>
                            <div className='details'>
                                <h3>{prod.title}</h3>
                                <p>{prod.description}</p>
                                <div className='price'>

                                <p>${prod.price}</p>
                                </div>
                            </div>
                        </div>
                    })}
            </div>
        </div>

    </div>
  )
}

export default Section2