import { useGetUsers } from "./hooks/useGetUsers";
import UserCards from "../Atoms/UserCards";
const Users = () => {
    const {users, loading, error} = useGetUsers();
    console.log('users...',users);
    return(
        <div>
            {loading && <h2>Loading users...</h2>}
            {users.length > 0  && !loading? (users.map(user=>(
                <UserCards image= {user.image} fullName={`${user.firstName} ${user.lastName}`} key={ user.id}/>
            ))
            ): !loading && <h2>No users found</h2>}
                {error.length > 0 && <h2>Error:{error}</h2>}
        </div>
    );
};
export default Users;
    
