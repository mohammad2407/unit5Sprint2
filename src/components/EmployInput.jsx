import React from 'react'
import { Card } from './Card'

export const EmployInput = ({ handleClick }) => {
  const [name, setName] = React.useState("")
  const [gender, setGender] = React.useState("")
  const [dept, setDept] = React.useState("")
  const [role, setRole] = React.useState("")
  const [salary, setSalary] = React.useState();
  const [data, setData] = React.useState([]);

  const handleSubmit = () => {
    const formData = {
      name, gender, dept, role, salary
    }

    setData([...data, formData]);
    console.log("data after submission", data);


    const jsonData = JSON.stringify(formData)
    // the code for posting data goes here - POST method
    fetch("http://localhost:3004/employees",{
      method :"POST",
      body: jsonData,
      headers:{
        "Content-Type" : "application/json"
      }
    })
    
  }


  // const jsonData = JSON.stringify(formData)
  React.useEffect(() => {
    getData()
  }, [])


  // getting the data from server
  const getData = () => {
    fetch("http://localhost:3004/employees").then((res) => (res = res.json())).then((res) => (setData(res))).catch((err) => (console.log("failed to fetch data",err)))
  }


  const ascending = () =>{
    fetch ("http://localhost:3004/employees?_sort=salary&_order=asc").then((res) =>(res = res.json())).then((res) => setData(res))
  }


  const descending = () =>{
    fetch ("http://localhost:3004/employees?_sort=salary&_order=desc").then((res) =>(res = res.json())).then((res) => setData(res))
  }




  return (
    <>

      <div >
        <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)} />
        <input placeholder='Department' value={dept} onChange={(e) => setDept(e.target.value)} />
        <input placeholder='role' value={role} onChange={(e) => setRole(e.target.value)} />
        <input placeholder='salary' type ="number" value={salary} onChange={(e) => setSalary(e.target.value)} />

        <button onClick={() => (handleSubmit())}>add</button>

        <button onClick={ascending} >Sort salary by Ascending</button>
        <button onClick={descending}>Sort salary by descending</button>


        {
          data.map((items) => <Card {...items} />)
        }

      </div>


    </>
  )
}
