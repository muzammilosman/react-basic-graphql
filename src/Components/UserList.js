import React, {useEffect, useState} from 'react';
import { useQuery , gql} from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries'
import User from './User';
const UserList = () => {

    const { error, loading, data} = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(data && data.getUsers){
            setUsers(data.getUsers)
        }
    }, [data])

    return(
        <div className="user-list"> 
        <h1>User list</h1>
            {
               users.map((user) => <User key={user.email} user={user}></User>)
            }
        </div>
    )
}

export default UserList