import { useParams } from "react-router-dom";

export const Users = () => {
    const {id} = useParams()

    return <div>
        User with id {id}
    </div>;
} 