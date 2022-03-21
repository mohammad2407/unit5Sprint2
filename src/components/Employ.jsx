import React from 'react'
import { Card } from './Card'
import { EmployInput } from './EmployInput'
export const Employ = () => {

    const [data,setData] = React.useState([])

    
  return (
    <div>

    <EmployInput />
    {
        // data.map((items) =>(<Card  {...items}/>))
    }
    </div>
  )
}
