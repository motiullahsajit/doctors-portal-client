import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const history = useHistory();
    const handleBlur = e => {
        e.preventDefault();
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }

    const handleFileChange = e => {
        e.preventDefault();
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(formData)
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:5050/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.push('/dashboard')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='col-md-5'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input name='name' type="text" onBlur={handleBlur} className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input name='email' type="email" onBlur={handleBlur} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <input onChange={handleFileChange} type="file" />
                </div>
                <button type="submit" className="btn btn-brand">Submit</button>
            </form>
        </div>
    );
};

export default AddDoctor;