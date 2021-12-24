import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import { useState } from 'react' 
import { useEffect } from 'react'

const Productlist = () => {
     
    const [article, setarticle] = useState([])
    useEffect(async () => {
        try {
            let items = await fetch("https://619479a19b1e780017ca1f90.mockapi.io/artcile")
        let userdata =  await items.json()
        setarticle(userdata)
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div class="container">
        <Link to='/product-create'>
        <button className='btn btn-success'>Add Product</button>
        </Link>
        <div className='row'>
        {
            article.map((obj) => {
              return  <div class="col-lg-4 col-sm-6 mb-30">
                  <div class="product-card mx-auto mb-3">
                      <div class="product-head d-flex justify-content-between align-items-center"><span class="badge badge-danger">Sale</span>
                          <div class="rating-stars"><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star"></i>
                          </div>
                      </div>
                      <a class="product-thumb" href="#"><img src={obj.img} alt="Product Thumbnail" /></a>
                      <div class="product-card-body"><a class="product-meta" href="#">Smart home</a>
                          <h5 class="product-title"><a href="#">{obj.productname}</a></h5><span class="product-price">
                          {obj.price}</span>
                      </div>
                      <div class="product-buttons-wrap">
                          <div class="product-buttons">
                              <div class="product-button"><a href="#"  ><i class="fa fa-heart"></i></a></div>
                              <div class="product-button"><a href="#" ><i class="fa fa-repeat"></i></a></div>
                              <div class="product-button"><a href="#" ><i class="fa fa-shopping-cart"></i></a></div>
                          </div>
                      </div>
                  </div>
              </div>
            
            })
        }
   
   </div>
       
        </div>
       
        
)
}
    


export default Productlist
