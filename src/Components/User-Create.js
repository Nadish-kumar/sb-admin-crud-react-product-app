import React from 'react'
import { useFormik } from 'formik'


const UserCreate = () => {

	const formik = useFormik({
		initialValues : {
			name : '',
			position : '',
			office : '',
			age : '',
			startDate : '',
			salary : '',
		},
		onSubmit: async values => {

		try {
			fetch("https://619479a19b1e780017ca1f90.mockapi.io/nadish",{
			method : "POST",
			body : JSON.stringify(values),
			headers : {
				"content-type" : "application/json" 
			}
           })
			alert("Data saved")
		} catch (error) {
			console.log(error)
		}
		 },
	})
	return (
		<>
			<div class="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className='h3 mb-0 text-gray-800'>User Create</h1>
			</div>
			<div className='container'>
			<form onSubmit={formik.handleSubmit}>
				<div className='row'>
					
					<div className='col-lg-6'>
						<label>Name</label>
						<input type="text" className='form-control'
						  name='name'
						  onChange={formik.handleChange}
						  value={formik.values.name}
						></input>
					</div>
					<div className='col-lg-6'>
						<label>Position</label>
						<input type="text" className='form-control'
						name='position'
						  onChange={formik.handleChange}
						  value={formik.values.position}
						></input>
					</div>
					<div className='col-lg-4'>
						<label>Office</label>
						<input type="text" className='form-control'
						name='office'
						  onChange={formik.handleChange}
						  value={formik.values.office}
						></input>
					</div>
					<div className='col-lg-4'>
						<label>AGE</label>
						<input type="number" className='form-control'
						name='age'
						  onChange={formik.handleChange}
						  value={formik.values.age}
						></input>
					</div>
					<div className='col-lg-4'>
						<label>StartDate</label>
						<input type="date" className='form-control'
						name='startDate'
						  onChange={formik.handleChange}
						  value={formik.values.startDate}
						></input>
					</div>
					<div className='col-lg-12'>
						<label>Salary</label>
						<input type="text" className='form-control'
						name='salary'
						  onChange={formik.handleChange}
						  value={formik.values.salary}
						></input>
					</div>
					<div className='col-lg-3 mt-3'>
				    <input type='submit' className='btn btn-primary'></input>
					</div>

				

				</div>
				</form>
			</div>

		</>







	)
}

export default UserCreate
