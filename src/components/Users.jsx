import { getUsers } from '../apis/users';
import { useEffect, useState } from 'react';
function User() {

    const [users, setUsers] = useState([]);
    useEffect(async () => {
        const response = await getUsers();
        setUsers(response.users);
    }, [])
    return <div>{users.map(user => <h1>{user.name + ' | ' + user.email + ' | ' + user.age + ' | ' + user.gender}</h1>)}</div>
}
export default User;