import React from 'react'


const CreateUser = ({onChangeForm, createUser }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Add Contact</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>First Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label>Email</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label>Phone Number</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="phone" id="phone" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label>Location</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="location" id="location" placeholder="Location" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser