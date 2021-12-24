import React from 'react'
import { useFormik } from 'formik';
import  { useEffect } from 'react';

const Createproduct = () => {
    
    const formik = useFormik({
        initialValues: {
          productname: '',
          price: '',
          img: '',
          url : "",
        },
        onSubmit: async values => {
          
          try {
            await fetch("https://619479a19b1e780017ca1f90.mockapi.io/artcile",{
              method : "POST",
              body : JSON.stringify(values),
              headers : {
                "content-type" : "application/json"
              }
            })
            alert("data saved")
          } catch (error) {
            console.log(error);
          }
          
        },
      });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <label>Product Name</label>
                 <input className='form-control' type="text"
                 name='productname'
                  onChange={formik.handleChange}
                  value={formik.values.productname}
                 ></input><br/>
                </div>
                <div className='col-lg-12'>
                    <label>Price</label>
                    <input type='number' className='form-control'
                    name='price'
                     onChange={formik.handleChange}
                     value={formik.values.price}
                    ></input><br />
                </div>
                <div className='col-lg-12'>
                    <label>Upload the Picture</label>
                    <input type='file' className='form-control'
                    name='img'
                     onChange={formik.handleChange}
                     value={formik.values.img}
                    ></input><br />
                     </div>
                     <div className='col-lg-12'>
                    <label>Upload the Picture url</label>
                    <input type='text' className='form-control'
                    name='url'
                     onChange={formik.handleChange}
                     value={formik.values.url}
                    ></input><br />
                     </div>

                     <div className='col-lg-3'>
                        <input type='submit' className='btn btn-success mt-4'></input>
                         </div>


            </div>
            
        </div>
        </form>
    )
}

export default Createproduct
