import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Update (props) {
    const { id } = useParams();
    const [errors, setErrors] = useState('')
    const [name, setName] = useState("")
    const navigate = useNavigate()

// gets one by id when page is mounted
    useEffect(() => {
        axios.get('http://localhost:8000/api/brain/' + id)
            .then(res => {
                setName(res.data.brain.name);
            })
            .catch(err => console.error(err));
    }, [id])

//onSubmit function from form to update 
    const updateBrain = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/brain/edit/${id}`, {
            name,
        })
            .then(res => {
                console.log("Response:", res)
                navigate('/')
            })
            .catch(err => {
                console.log("Error", err)
                setErrors(err.response?.data.errors)
            })
    }

    return (name?
        <div>
            <p><Link to="/">Home</Link></p>
            <h4>Edit this brain:</h4>
            <form onSubmit={updateBrain} className="border w-25 mx-auto p-2">
                <div className="mt-3">
                    <label className="label-control">Name:</label>
                    <input className="mx-auto form-control w-50" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {errors?.name? <p className="text-danger">{errors.name.message}</p>:<p></p>}
                </div>
                <Link className="btn btn-warning mt-3 me-3" to='/'>Cancel</Link>
                <button className="btn btn-success mt-3">Submit</button>
            </form>
        </div>:
        <div>
            <p><Link to="/">Home</Link></p>
            <h4>We're sorry, but we could not find the brain you are looking for. Would you like to add this brain to our database?</h4>
            <p><Link to="/new">Add Brain</Link></p>
        </div>
    )
}