import React from 'react'
import CustomInput from '../../components/custominput/CustomInput'

const AddCategory = () => {
  return (
    <div><h3 className="mb-4">Add a Category</h3>
    <div className="">
        <form action="">
            <CustomInput type='text' label="Type Category name" />
            <button className="btn btn-success border-0 rounded-3 my-5" type='submit'>
                Add Category
            </button>
        </form>
    </div></div>
  )
}

export default AddCategory