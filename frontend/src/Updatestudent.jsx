import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Updatestudent = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    function handlesubmit (event){
        event.preventDefault();
        axios.put(`http://localhost:8081/update/${id}`, {name,email})
        .then(res =>{
            console.log(res)
            navigate('/');
        })
        .catch(err=>{
            console.log(err);
        })

    }
  return (
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handlesubmit}>
                <h2>Update student</h2>
                <div className='mb-4'>
                    <input type="text" placeholder='Enter the Name' className='form-control'
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                </div>
                <div className='mb-4'>
                    <input type="email" placeholder='Enter the Email'  className='form-control'
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Updatestudent;