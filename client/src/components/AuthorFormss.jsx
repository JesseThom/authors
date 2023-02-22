import React, { useState } from "react";

export default (props) => {
    const { initialName, errors, onSubmitProp} = props
    const [name, setName] = useState(initialName)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <div>
        <form onSubmit={handleSubmit} className="border w-25 mx-auto p-2">
            <div className="mt-3">
                <label className="label-control">Name:</label>
                <input className="mx-auto form-control w-50" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                {/* {errors?.title? <p className="text-danger">{errors.title.message}</p>:<p></p>} */}
            </div>
            <button className="btn btn-success mt-3">Submit</button>
        </form>
        </div>
    )
}