import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {

    
    return(
        <div style={{backgroundColor:'blue'}} className="display-board">
            <h4 style={{color: 'white'}}>Users Created</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">All Users</button>
            </div>
        </div>
    )
}