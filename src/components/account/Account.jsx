import React, { useState } from 'react';
import './account.css';
import Sidebarlayout from '../Layout/Sidebarlayout';

function Account() {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        organization: '',
        location: '',
        address: '',
        dateofbirth: ''
    });

    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { firstname, lastname, email, phonenumber, organization, location, address, dateofbirth } = formData; // Assuming formData contains the form data
    
            const response = await fetch('http://localhost:3000/account/useraccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    phonenumber: phonenumber,
                    organization: organization,
                    location: location,
                    address: address,
                    dateofbirth: dateofbirth,
                })
            });
    
            if (!response.ok) {
                throw new Error('Account registration failed');
            } else {
                alert("Account registration successful");
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show error message)
        }
    };

    

    return (
        <>
            <Sidebarlayout>
                <div className="account-container-xl px-4 mt-4">
                    <hr className="account-mt-0 mb-4" />
                    <div className="account row">
                        <div className="account-col-xl-4">
                            <div className="account card mb-4 mb-xl-0">
                                <div className="account-card-header">Profile Picture</div>
                                <div className="account-card-body text-center">
                                <div className="img-account-profile-container">
                                    <img className="img-account-profile rounded-circle mb-4" src={file ? URL.createObjectURL(file) : ""} alt="" />
                                </div>
                    
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                         

                                    <label htmlFor="fileInput" className="btn btn-primary">Upload new image</label>
                                    <input
                                        id="fileInput"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleFileUpload}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-2 text-primary">Personal Details</h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="fullName">First Name</label>
                                                <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Last Name</label>
                                                <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="eMail">Email</label>
                                                <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="organization">Organization</label>
                                                <input type="text" className="form-control" id="organization" placeholder="Enter organization" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="organization">Location</label>
                                                <input type="text" className="form-control" id="organization" placeholder="Enter organization" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="organization">Address</label>
                                                <input type="Address" className="form-control" id="organization" placeholder="Enter organization" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="organization">Date of Birth</label>
                                                <input type="date" className="form-control" id="organization" placeholder="Enter organization" />
                                            </div>

                                          

                                        </div>

                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="text-right">
                                                <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                                <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebarlayout>
        </>
    );
}

export default Account;