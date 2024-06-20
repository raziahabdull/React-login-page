import { useGetUsers } from "../../Users/hooks/useGetUsers";
import UserCards from "../Atoms/UserCards";

const Usercards = ({image , fullName})=>{
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/>
        </div>
    )
}