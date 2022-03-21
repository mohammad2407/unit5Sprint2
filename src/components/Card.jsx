import React from 'react'
import "./box.css"

export const Card = ({name,gender,role,salary,dept}) => {
  return (
    <div className='box'>

        <p>name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Role: {role}</p>
        <p>Department: {dept}</p>
        <p>Salary: {salary}</p>



    </div>
  )
}
