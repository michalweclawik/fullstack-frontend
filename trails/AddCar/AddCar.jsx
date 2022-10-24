import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddCar = () => {
    let navigate = useNavigate();

    const [car, setCar] = useState({
        branch: "",
        type: "",
        version: "",
        rating: "",
        price: "",
        passagerCapacity: "",



    })


    const { branch, type, version, rating, price, passagerCapacity } = car;

    const handleInput = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const url = `http://localhost:8080/car`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car)
        });

        navigate("/")
    }
    // await

    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register Car</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Branch</label>
                            <input type={"text"} className="form-control " placeholder='Enter car branch'
                                name="branch" value={branch} onChange={(e) => handleInput(e)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Type" className='form-label'>Type</label>
                            <input type={"text"} className="form-control " placeholder='Enter car type'
                                name="type" value={type} onChange={(e) => handleInput(e)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Version" className='form-label'>Version</label>
                            <input type={"text"} className="form-control " placeholder='Enter car version'
                                name="version" value={version} onChange={(e) => handleInput(e)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Rating" className='form-label'>Rating</label>
                            <input type={"text"} className="form-control " placeholder='Enter car rating'
                                name="rating" value={rating} onChange={(e) => handleInput(e)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Price" className='form-label'>Price</label>
                            <input type={"text"} className="form-control " placeholder='Enter car price'
                                name="price" value={price} onChange={(e) => handleInput(e)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Passager Capacity" className='form-label'>Passager Capacity</label>
                            <input type={"text"} className="form-control " placeholder='Enter car passager capacity'
                                name="passagerCapacity" value={passagerCapacity} onChange={(e) => handleInput(e)} />

                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCar