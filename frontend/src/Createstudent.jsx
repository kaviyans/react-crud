import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Createstudent = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    function handlesubmit (event){
        event.preventDefault();
        axios.post('http://localhost:8081/create' , {name,email})
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
                <h2>Add student</h2>
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
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Createstudent