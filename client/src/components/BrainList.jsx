import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const BrainList = (props) => {
    const [brainsList, setBrainsList] = useState([])
//gets all when page is mounted
    useEffect(() => {
        axios.get(`http://localhost:8000/api/brains`)
            .then(res => {
                setBrainsList(res.data)
            })
    }, [])
//onClick function from form to delete 
    const handleDelete = (deletedId) => {
        axios.delete(`http://localhost:8000/api/brain/${deletedId}`)
            .then(res => {
                console.log(res)
                removeFromDom(deletedId)
            })
            .catch(err => {
                console.log(err)
            })
    }
//updates list after deletion
    const removeFromDom = deletedId => {
        setBrainsList(brainsList.filter(brain => deletedId !== brain._id))
    }
// sorts list alphabetically
    let sortedBrainsList = brainsList.sort(function (a, b) {
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    
    return (
        <div>

            <p><Link to="/new">Add an Brain</Link></p>
            <h4>We have quotes by:</h4>
            <table className='table table-striped border w-25 mx-auto'>
                <thead>
                    <tr>
                        <th>Brains</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedBrainsList.map((brain, i) =>
                        <tr key={i} className='border'>
                            <td>{brain.name}</td>
                            <td><Link to={`/edit/${brain._id}`} className='btn btn-warning mx-5'>Edit</Link></td>
                            <td><button onClick={(e) => handleDelete(brain._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default BrainList;