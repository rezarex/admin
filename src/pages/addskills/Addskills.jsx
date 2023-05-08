import React from 'react';
import CustomInput from '../../components/custominput/CustomInput'

const Addskills = () => {
  return (
    <div>
        <h3 className="mb-4">Add a skill</h3>
        <div className="">
            <form action="">
                <CustomInput type='text' label="Type skill name" />
                <button className="btn btn-success border-0 rounded-3 my-5" type='submit'>
                    Add Skill
                </button>
            </form>
        </div>
    </div>
  )
}

export default Addskills