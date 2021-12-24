import React from 'react'
import './Product.css'


const Product = () => {
    return (
        <div class="col-lg-4 col-sm-6 mb-30">
        <div class="product-card mx-auto mb-3">
            <div class="product-head d-flex justify-content-between align-items-center"><span class="badge badge-danger">Sale</span>
                <div class="rating-stars"><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star active"></i><i class="fa fa-star"></i>
                </div>
            </div>
            <a class="product-thumb" href="#"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Product Thumbnail" /></a>
            <div class="product-card-body"><a class="product-meta" href="#">Smart home</a>
                <h5 class="product-title"><a href="#">Amazon Echo Dot (2nd Generation)</a></h5><span class="product-price">
                <del>$62.00</del>$49.99</span>
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
    )
}

export default Product