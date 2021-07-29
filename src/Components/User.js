import React from 'react'

export default function User({user}) {
    const EmailField = () => {
        if(user.email){
            return <p>{user.email}</p>
        } else {
            return
        }
    }
        return (
            <div className="user-box">
                <h2>{user.lastName}</h2>
                <h2>{user.firstName}</h2>
                <EmailField></EmailField>
            </div>
        )
}
