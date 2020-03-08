import React, { useState, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import Axios from 'axios';

export const addHouse = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        region: '',
        description: '',
        image: ''
    });

    const { name, region, description, image } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        Axios
            .post("/api/house/add", formData)
            .then(res => {
                props.history.push('/')
            })

    }
    return (
        <Fragment><h1 className="large text-primary">Add house</h1>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Region" name="region" value={region} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Description" name="description" value={description} onChange={e => onChange(e)} required />

                    <div className="form-group">
                        <input type="text" placeholder="Image" name="image" value={image} onChange={e => onChange(e)} required />
                    </div>
                </div>
                <input type="submit" className="btn btn-primary" value="Add" />
            </form>

        </Fragment>
    )
}