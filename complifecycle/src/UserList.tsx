import { useEffect, useState
 } from "react";
export default function UserList(){

    let [users,setUsers] = useState([]);
    let [selectedUsers,setSelectedUsers] = useState([]); 
    let [page,setPage] = useState(0);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data.users);
        });

    },[]);

    useEffect(() => {
        document.title = `Total Users : ${users.length}`;
        setSelectedUsers(users.slice(page * 10,(page +1 )* 10));
    },[users]);

    useEffect(() => {
        setSelectedUsers(users.slice(page * 10,(page +1 )* 10));
    },[page]);

    return(
        <div className="container">
            <h1>User List</h1>

            {users.length === 0 && <p>Loading....</p>}
            {users.length > 0 && <>
                {
                    Array.from({length : users.length / 10}).map((_,index) => 
                        <button className="btn btn-sm btn-primary mx-2" type="button" onClick={() => setPage(index)}>{index+1}</button>   
                    )
                }
                <ul className="list-group mt-4">
                    {selectedUsers.map((user:any) => {
                        return <li key={user.id} 
                                className="list-group-item">
                                  <div className="row">
                                     <div className="col-auto">
                                        <img src={user.image} className="avatar" width={48} height={48} />
                                     </div>
                                     <div className="col">
                                        <h4>{user.firstName} {user.lastName}</h4>
                                        {user.email}
                                     </div>
                                  </div>
                            </li>
                    })}
                </ul>
            </>}
        </div>
    )
}