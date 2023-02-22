import axios from 'axios'
import React, {useEffect, useState} from 'react'
import BrainList from '../components/BrainList'

const Main = () => {
    const [brains, setBrains] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/brains')
        .then(res => {
            setBrains(res.data);
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div>
        {brains? <BrainList brains={brains} />:<h1>loading....</h1>}
        </div>
    )
}

export default Main