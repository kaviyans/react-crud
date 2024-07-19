import React, { useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'
import { Link } from 'react-router-dom'

const Student = () => {
    const [student , setStudent] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    },[])

    const deletevalue = async (id) =>{
        try{
            await axios.delete('http://localhost:8081/delete/' + id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center' style={{background:"black", color:"black"}}>
        <div className='w-50 rounded p-4' style={{background:"#c6e5ff"}}>
            <Link to='/create' className='btn btn-success mb-3'> Add +</Link>
            <table className='table' style={{background:"#c6e5ff"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data,i)=>(
                            <tr key={data.id || i}>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>
                                    <Link to={`update/${data.ID}`} className='btn btn-primary'>update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => deletevalue(data.ID)}>remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Student