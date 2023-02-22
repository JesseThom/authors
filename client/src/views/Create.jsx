import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export default () => {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/brain/new`, {
            name
        })
        .then(res => {
            console.log("Response:", res)
            navigate("/")
        })
        .catch(err => {
            console.log("Error", err)
            setErrors(err.response?.data.errors)
        })
    }

    return (
        <div>
        <p><Link to="/">Home</Link></p>
        <h4>Add a new brain:</h4>
        <form onSubmit={handleSubmit} className="border w-25 mx-auto p-2">
            <div className="mt-3">
                <label className="label-control">Name:</label>
                <input className="mx-auto form-control w-50" type="text"  onChange={(e)=>setName(e.target.value)} />
                {errors?.name? <p className="text-danger">{errors.name.message}</p>:<p></p>}
            </div>
            <Link className="btn btn-warning mt-3 me-3" to='/'>Cancel</Link>
            <button className="btn btn-success mt-3">Submit</button>
        </form>
        </div>
    )
}